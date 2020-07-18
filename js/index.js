
const setImg = (id) => {
   let audioSelector = document.querySelector(".r-r1");
   let audioId = this.id;
   localStorage.setItem('audio-id' , id);
   console.log(localStorage.getItem('audio-id'));
   window.document.location = '../html/setTimer.html'
};
