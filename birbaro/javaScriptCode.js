const Intro = () => { 
  return (
  <div>
    <h1>Bir Baro</h1>
    <ul>
      <li>Xoog Dis</li>
        <p>Intee Aad Qaadey kartaa?</p>
      <li>Tamar Dhis</li>
        <p>Ka Waran Xaalada Wadnahaadha Iyo Samababahisi?</p>
    </ul>
  </div>
  )
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.generate = this.generate.bind(this)
    this.state = {plan: ["Yes"]}
  }

  generate() {
    var days = document.getElementById("days").value
      let daysOfTheWeek = {
      0: "mon",
      1: "tue",
      2: "wed",
      3: "thu",
      4: "fri",
      5: "sat",
      6: "sun"
};
      let exercises = {
      "Push":{"Weighted": ["Bench", "Military Press", "Incline Bench","Cardio"],"Nonweighted":["Dips","HSPU","PushUps","Cardio"]},
      "Pull":{"Weighted": ["Chin Ups", "Pull Ups", "Rows","Cardio"],"Nonweighted":["Chin Ups", "Pull Ups", "Rows","Cardio"]},
      "Legs":{"Weighted": ["Deadlift", "Squat", "Pause Squat","Cardio"],"Nonweighted":["Pistol Squat","Squat","Lunges","Cardio"]},
      "Core":{"Weighted": ["Front Lever", "Leg Raises", "Knee Raises","Cardio"],"Nonweighted":["Ab Wheel","Plank","Sit Ups","Cardio"]}
      }
      let bodyPartIndices = {
        0 : "Push",
        1 : "Pull",
        2 : "Legs",
        3 : "Core"
      };
      let workout = [];
      let bodyParts = 4;
      for(let i = 0; i < (days * 2)-1; i += 2){
      workout.push(daysOfTheWeek[i]);
      if(document.getElementById('weighted').checked){
        for(let j = i/2; j < bodyParts+(i/2); j++){
        if(j >= bodyParts){
        workout.push(exercises[bodyPartIndices[j-bodyParts]]["Weighted"][j-(i/2)])
        }
        else {
        workout.push(exercises[bodyPartIndices[j]]["Weighted"][j-(i/2)])
        }
        }
      }
      else {
        for(let j = i/2; j < bodyParts+(i/2); j++){
        if(j >= bodyParts){
        workout.push(exercises[bodyPartIndices[j-bodyParts]]["Nonweighted"][j-(i/2)])
        }
        else {
        workout.push(exercises[bodyPartIndices[j]]["Nonweighted"][j-(i/2)])
        }
        }
      }
      } 

    this.setState({plan : workout});
}

    render() {

      return (
        <div>
            <h2 id="imasa">Imasa Maalmo Aad Waqti Xoog siina Kartaa? </h2>
          <input type="number" name="days" id="days" min="1" max="4"></input>
          
          <h2>Biro Oo Qaadid Maad Haysataa?</h2>
          <input type="radio" id="weighted" name="isweighted" value="true"></input>
          <label for="weighted">Haa</label>
          <input type="radio" id="nonweighted" name="isweighted" value="false"></input>
          <label for="nonweighted">Maya</label>
          <button onClick={this.generate}>Generate</button>
          <h1>{this.state.plan}</h1>
        </div>
        )
    }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
          <div>
          <Intro />
          <Form />
          </div>
);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

