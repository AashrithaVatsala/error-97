class Form {
    constructor(){
       
        this.title = createElement("h3");
        this.input = createInput("Enter Name");
        this.button = createButton("Play");
        this.greeting = createElement("h4");
        this.reset = createButton("Reset");
    
    }

    display(){
    
        this.title.html("Chef's Story");
        this.title.position(400, 100);

        this.input.position(400, 300);
        this.button.position(400, 400);

        this.button.mousePressed(()=>{

           this.title.hide();
           this.input.hide();
           this.button.hide();
           
           player.name = this.input.value();
           PlayerCount++
           player.index = PlayerCount;
           player.update();
           player.updateCount(PlayerCount);
           
           this.greeting.html("Welcome Chef " + player.name);
           this.greeting.position(400, 300);
           

        })
        
        this.reset.position(700, 50);
        this.reset.mousePressed(()=>{

          player.updateCount(0);
          game.updateState(0);
          

        })

    }
}