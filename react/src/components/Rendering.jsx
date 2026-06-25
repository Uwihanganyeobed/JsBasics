export default function Rendering(){
    let isLoggedIn = true;
    let studentMarks=''
    return(
        <div>
            <h2>This is my Rendering component</h2>
            {isLoggedIn ? <p>Welcome Back, user!</p> 
            : <p>Please log in to continue.</p>}

            {studentMarks >= 50 ? <p>Congratulations! You passed the exam.</p>
            : <p>Sorry, you failed the exam. Better luck next time.</p>}

            <h2 style={{color: isLoggedIn? 'green':'red'}}>
                Check your Login Color status
            </h2>
        </div>
    )
}