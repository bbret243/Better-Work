import axios from 'axios';
import { getJobs } from '../../services/apiService';
import { jest, describe, test, it, expect } from 'jest'

jest.mock('axios');

describe('apiService', () => {
  describe('getJobs', () => {


it('should successfully retrieve jobs when API is accessible', async () => {
  const mockJobs = [{ id: 1, title: 'Software Engineer' }, { id: 2, title: 'Designer' }];
  axios.get.mockResolvedValue({ data: mockJobs });

  const result = await getJobs();

  expect(axios.get).toHaveBeenCalledWith(`${API_URL}/jobs`);
  expect(result.data).toEqual(mockJobs);
});

it('should throw an error when API is unreachable', async () => {
  const errorMessage = 'Network Error';
  axios.get.mockRejectedValue(new Error(errorMessage));

  await expect(getJobs()).rejects.toThrow(errorMessage);
  expect(axios.get).toHaveBeenCalledWith(`${API_URL}/jobs`);
});

it('should handle large number of jobs in the response', async () => {
  const largeJobList = Array(1000).fill().map((_, index) => ({
    id: index,
    title: `Job ${index}`,
    description: `Description for job ${index}`
  }));
  
  axios.get.mockResolvedValue({ data: largeJobList });

  const result = await getJobs();

  expect(result.data).toHaveLength(1000);
  expect(result.data[0]).toHaveProperty('id', 0);
  expect(result.data[999]).toHaveProperty('id', 999);
});

it('should respect rate limiting and handle 429 responses', async () => {
  const retryDelay = 1000; // 1 second
  const maxRetries = 3;
  let retries = 0;

  axios.get.mockImplementation(() => {
    if (retries < maxRetries) {
      retries++;
      return Promise.reject({ response: { status: 429 } });
    }
    return Promise.resolve({ data: [{ id: 1, title: 'Job 1' }] });
  });

  jest.useFakeTimers();

  const jobsPromise = getJobs();

  for (let i = 0; i < maxRetries; i++) {
    jest.advanceTimersByTime(retryDelay);
    await Promise.resolve();
  }

  const result = await jobsPromise;

  expect(axios.get).toHaveBeenCalledTimes(maxRetries + 1);
  expect(result).toEqual({ data: [{ id: 1, title: 'Job 1' }] });

  jest.useRealTimers();
});


it('should timeout after a specified duration if API is slow', async () => {
  const timeout = 1000; // 1 second timeout
  axios.get.mockImplementation(() => new Promise(resolve => setTimeout(resolve, timeout + 100)));

  await expect(Promise.race([
    getJobs(),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
  ])).rejects.toThrow('Timeout');

  expect(axios.get).toHaveBeenCalledWith(`${API_URL}/jobs`);
});


it('should handle and report API authentication errors', async () => {
  const errorMessage = 'Unauthorized';
  axios.get.mockRejectedValue({ response: { status: 401, data: { message: errorMessage } } });

  await expect(getJobs()).rejects.toThrow('Authentication error: Unauthorized');

  expect(axios.get).toHaveBeenCalledWith(`${API_URL}/jobs`);
});
  });

it('should handle and parse different job formats in the response', async () => {
  const mockJobs = [
    { id: 1, title: 'Software Engineer', salary: '$100,000' },
    { id: 2, title: 'Designer', hourlyRate: '$50/hour' },
    { id: 3, title: 'Project Manager', compensation: 'Competitive' }
  ];
  axios.get.mockResolvedValue({ data: mockJobs });

  const result = await getJobs();

  expect(axios.get).toHaveBeenCalledWith(`${API_URL}/jobs`);
  expect(result.data).toEqual(mockJobs);
  expect(result.data[0]).toHaveProperty('salary');
  expect(result.data[1]).toHaveProperty('hourlyRate');
  expect(result.data[2]).toHaveProperty('compensation');
});
});
