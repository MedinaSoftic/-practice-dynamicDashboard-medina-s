function TaskLists() {

    const list = [
        {id:1, taskName:"Make Breakfast", completed:true},
        {id:2, taskName:"Walk Dog", completed:false},
        {id:3, taskName:"Get to Work", completed:true},
        {id:4, taskName:"Finish Code", completed:true},
    ];


    const listItems = list.map(lists => <li key={lists.id}>
                                            {lists.taskName}: &nbsp;
                                            {lists.completed ? '\u2705' : '\u274C'} </li>)
    

    return (
        <ol>{listItems}</ol>

    );
    }



export default TaskLists;
