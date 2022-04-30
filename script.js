    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]

    const weekdays = [
        'Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sábado'
    ]


    const dataFinal = document.querySelector('.dataFinal');
    const deadline = document.querySelector('.tempo');
    const items = document.querySelectorAll('.div-format h4');

    let futureDate = new Date(2022,3,30,0,0);

    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();

    let month = futureDate.getMonth();
    month = months[month];
    const date = futureDate.getDate();

    const weekday = weekdays[futureDate.getDay()];


    dataFinal.textContent = `Contagem termina em ${weekday}, ${date} de ${month} de ${year}, às ${hours}:${minutes}0am`;


    const futureTime = futureDate.getTime();

    function getRemainingTime(){
        const today = new Date().getTime();
        const t = futureTime - today;

        //values in ms
        const oneDay = 24*60*60*1000;
        const oneHour = 60*60*1000;
        const oneMinute = 60*1000;

        let days = t/oneDay;
        days = Math.floor(days);
        let hours = Math.floor((t % oneDay) /oneHour);
        let minutes = Math.floor((t%oneHour) / oneMinute);
        let seconds = Math.floor((t%oneMinute) / 1000)


        const values = [days,hours,minutes,seconds];

        function format(item){
            if(item < 10){
                return item = `0${item}`
            }
            return item;
        }

        items.forEach(function(item,index){
            item.innerHTML = values[index];
        });

        if(t<0){
            clearInterval(contagem);
            deadline.innerHTML = '<h4 class="expired"> sorry, this giveaway has expired </h4>';
        }
    }

    //contagem

    let contagem = setInterval(getRemainingTime, 1000);
    getRemainingTime();