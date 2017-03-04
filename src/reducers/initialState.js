export default {
  authors:[],
  courses:[],
  course: {id: '',
    watchHref:'',
    title:'',
    authorId:'',
    length:'',
    category:'',
    validation: {
      isValid: false,
      error: '',
      title: {
        touched: false,
        error: ''
      },
      category: {
        touched: false,
        error: ''
      }
    }},
  ajaxCallsInProgress:0
};
