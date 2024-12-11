export const getEventFormData = (form) => { 
    const updatedFormData = {}
    const inputData = new FormData(form)
    inputData.keys().forEach(key => {
      console.log(inputData.get(key))
      updatedFormData[key] = inputData.get(key)
    })
    return updatedFormData
}

export class FormSubmitJob {
   failCallback
   loadingCallback
   messageCallback
   actionCallback
   formData
   constructor(e) {
    e.preventDefault()
    this.readEventData(e)
   }
   readEventData = (e) => {
    this.formData = getEventFormData(e.target.form)
   }
   formAction = (callback) => {
    this.actionCallback = callback
    return this
   }
   fail = (callback) => {
    this.failCallback = callback
    return this
   }
   loadingStateChanged = (callback) => {
    this.loadingCallback = callback
    return this
   }
   serverMessage = (callback) => {
    this.messageCallback = callback
    return this
   }
   submit = async () => {
    try {
      this.loadingCallback(true)
      alert(JSON.stringify(this.formData))
      const response = await this.actionCallback(this.formData);
      if(!response) {
        this.failCallback("Response undefined.")
      }
      if(response?.error) {
        this.failCallback(response?.error)
      } else {
        this.messageCallback(JSON.stringify(response));
      }
    } catch (error) {
      console.error(error.message);
      this.failCallback(error.message)
    } finally {
      this.loadingCallback(false)
    }
  }
}
