// Genera 10 mail tramite api e stampale in una lista.

var app = new Vue({
  el: '#mail',
  data: {
    email: []
  },
  mounted(){
    for (var i = 0; i < 10; i++) {
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((result) => {
        this.email.push(result.data.response)
        // console.log(this.email);
      });
    }
  }
});
