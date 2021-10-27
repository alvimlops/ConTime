function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 12 && hora < 18){
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }













}