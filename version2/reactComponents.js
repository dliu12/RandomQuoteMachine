//Quote displayer
 class Quote extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="transition" id="quote">
                <h1>"{this.props.dataFromComponent}"</h1>
            </div>
        );
    }
}
// Author displayer
class Author extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="transition" id="author">
                <h2>-- {this.props.dataFromComponent}</h2>
            </div>
        )
    }
}

// general component object
class Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quote: "Click to see quotes",
            author: "Diyi Liu",
            css_background:'lightcoral'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        // create random quote object
        const randomQuote = {
            0:{
                "quote":"Sometimes, all you had to do was exist in order to be someone’s saviour.",
                "author": "Keigo Higashino"
            },
            1:{
                "quote":"The relationship between teacher and student is based on illusion. The teacher is under the illusion that he is teaching something, and the student is under the illusion that he is being taught. What’s important is that this shared illusion makes both teacher and student happy. Nothing good is gained by facing the truth, after all. All we’re doing is playing at education.",
                "author": "Keigo Higashino"
            },
            2:{
                "quote":"Which is harder: devising an unsolvable problem, or solving that problem?",
                "author": "Keigo Higashino"
            },
            3:{
                "quote":"Which is harder: devising an unsolvable problem, or solving that problem?",
                "author": "Keigo Higashino"
            },
            4:{
                "quote":"It didn’t bother me. It excited my curiosity. And I believe there is no greater sin than to leave one’s curiosity unsatisfied.",
                "author": "Keigo Higashino"
            },
            5:{
                "quote":"People who live with their head in the clouds deserve to hit the ground every once in a while.",
                "author": "Keigo Higashino"
            },
            6:{
                "quote":"Curiosity is the fuel that powers the engine of human advancement.",
                "author": "Keigo Higashino"
            },
            7:{
                "quote":"The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy.",
                "author": "Sun Zi"
            },
            8:{
                "quote":"All warfare is based on deception.",
                "author": "Sun Zi"
            },
            9:{
                "quote":"The supreme art of war is to subdue the enemy without fighting.",
                "author": "Sun Zi"
            },
            10:{
                "quote":"Know thy self, know thy enemy. A thousand battles, a thousand victories.",
                "author": "Sun Zi"
            },
            11:{
                "quote":"Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
                "author": "Sun Zi"
            },
            12:{
                "quote":"There is no instance of a nation benefitting from prolonged warfare.",
                "author": "Sun Zi"
            },
            13:{
                "quote":"The art of war teaches us to rely not on the likelihood of the enemy’s not coming, but on our own readiness to receive him; not on the chance of his not attacking, but rather on the fact that we have made our position unassailable.",
                "author": "Sun Zi"
            },
            14:{
                "quote":"He will win who knows when to fight and when not to fight.",
                "author": "Sun Zi"
            },
            15:{
                "quote":"Thus, what is of supreme important in war is to attack the enemy’s strategy.",
                "author": "Sun Zi"
            },
            16:{
                "quote":"It is the supreme art of the teacher to awaken joy in creative expression and knowledge.",
                "author": "Albert Einstein"
            }
        };
        const randomColors = ['lightcoral','lightsalmon','#667761','#FCAF58','#98C9A3','#77BFA3','#DC493A','#636564'];
        let randomNumber = Math.round((Math.random()*16));
        let currentQuote = randomQuote[randomNumber].quote;
        let currentAuthor = randomQuote[randomNumber].author;
        let currentBackground = randomColors[(randomNumber % randomColors.length)];

        this.setState({
            quote:currentQuote,
            author:currentAuthor,
            css_background:currentBackground
        });

        
        $("#component").css("background",this.state.css_background);
    }
    
    render(){
        return(
            <div id="component" onClick = {this.handleClick}>
                <Quote dataFromComponent = {this.state.quote}/>
                <Author dataFromComponent = {this.state.author}/>
            </div>
        );
    }
}

//main render
class App extends React.Component{
        constructor(props){
            super(props);
        }
        
        render(){
            return(
                <Component />
            );
        }
    }

let node = document.getElementById("node");
ReactDOM.render(<App />,node);
//end of render files
