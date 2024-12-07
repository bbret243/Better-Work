import { getTalents } from '../services/apiService';
import TalentCard from '../components/TalentCard';
import useFetch from '../hooks/useFetch';

const FindTalent = () => {
  const { data: talents, loading, error } = useFetch(getTalents);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="find-talent">
      <h2>Find Talent</h2>
      <div className="talent-list">
        {talents.map((talent) => (
          <TalentCard key={talent.id} talent={talent} />
        ))}
      </div>
    </div>
  );
};

export default FindTalent;
