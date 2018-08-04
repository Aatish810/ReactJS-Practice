console.log('App.js Running')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands of computer',
    options: []
}
const onFormSubmit = (e)=> {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option) {
      app.options.push(option)
      e.target.elements.option.value = '';
      render();
  }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = ()=> {
     const randomNum = Math.floor(Math.random()*app.options.length)
     const option = app.options[randomNum];
     alert(option)
}
const render = ()=> {
    const template = (<div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p> {app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick= {onMakeDecision}>What Should I Do?</button>
        <button onClick={onRemoveAll}>Reset</button>
        <ol>
           {
               app.options.map((option) =>  <li key= {option}>{option}</li>)
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>)
    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app');
render()
