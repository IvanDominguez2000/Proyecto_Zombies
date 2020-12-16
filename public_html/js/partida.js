let partida = {
    mida_tauler: 5,
    mida_caselles_tauler = 25,
    tauler: [],
    zombies: [],/*25% de mida_caselles_tasuler*/
    estrelles: [],/*mida_tauler*/ 

    inicialitzar_tauler : function(){
        for (let i = 0; i < tauler.lenght;i++){ 
        tauler[i]= [];
        for (let j = 0; j < tauler.length; j++) {
            tauler [i][j] = tauler[j];
            /*Iniciar tablero*/
            } 

        }   
    },

    iniciar: function (mida){
        this.mida_tauler = mida;
        this.mida_caselles_tauler = mida*mida;
        this.inicialitzar_tauler();
        this.crear_estrelles();
    },

    pintar_tauler: function(){

    },

    crear_estrelles: function(){
        let estrelles_creades = 0;
        while (estrelles_creades < 5){
            let estrella = new Estrella();
            //estrella.
            this.estrelles.push(estrella);
            estrelles_creades++;
            this.setPosicio(i,j);
        }
    },
    
    getPosicio: function(x,y){
        return tauler[x][y];
    },

    setPosicio: function(valor, x,y){
        tauler[x][y] = valor;
    }

}