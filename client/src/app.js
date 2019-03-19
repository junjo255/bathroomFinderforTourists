import axios from 'axios';




(function showBathrooms() {

    axios.get(`/map`)
        .then((data) => {
            console.log(data);


            //console.log(data.data[0].onList)
        })
        .catch((err) => {
            console.log(err);
        })


})()
