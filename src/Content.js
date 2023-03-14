import React from 'react'

const Content = () => {
    const name = "Stacey";

	const handleNameChange = () => {
    	const names = ['Dave','Stacey','Bob', 'Vicky', 'Sisi', 'Dila'];
    	const int = Math.floor(Math.random() * 6);
    	return names[int];
	}

    const handleClick = () => {
        console.log('You clicked the button')
    }

    const handleClick2 = (names) => {
        console.log(`${names} clicked the button`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p>
                Standard HTML Data is placed directly between 	&#60;p&#62; and &#60;/p&#62;
            </p>

            <p>
                To use links you must use &#123; &#125; for example:<br/>
                This is a string: using &#123;"Stacey"&#125; renders as {"Stacey"}<br/>
                This is an integer: using &#123;1&#125; renders as {1}<br/>
                This is an Array: using &#123;[1, 2, 3]&#125; renders as {[1, 2, 3]}<br/>
                You can not use objects like &#123; a: 1, b: 2 &#125; as it will not render<br/>
                Boolean will not render either ie &#123;True === False&#125; should return 'False' but will error instead<br/>
                You can use the const I created earlier: using &#123;name&#125; will render as {name}
            </p>
        
            <p>
                You can also use a created function ie: 'Hello &#123;handleNameChange()&#125;!' renders as Hello {handleNameChange()}!<br/>
                The 'handleNameChange()' function has a fixed list of names, this then chooses a name at random and then finally displays this name. Try it by reloading the plage.
            </p>

            <p onDoubleClick={handleClick}>The double click handle</p>

            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClick2('Dave')}>Don't Click Me</button>
            <button onClick={(e) => handleClick3(e)}>Please Don't Click Me</button>
        </main>
    )
}

export default Content