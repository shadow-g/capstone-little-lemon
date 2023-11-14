import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Feedback() {

    const [score, setScore] = useState("10");
    const [comments, setComments] = useState("");
    return (
        <form className='feedback-form'>
            <h2>Leave us a review!</h2>
            <div className='Field'>
                <label className='feedback-score'>Score: {score}</label>
                <input type='range' min='0' max='10' value={score} onChange={e => setScore(e.target.value)} />
            </div>
            <div>
                <label className='feedback-comment' htmlFor="comments">Special Requests</label> <br></br>
                <textarea
                    id="comments"
                    rows={8}
                    cols={50}
                    placeholder="Optional"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                ></textarea>
            </div>
            <Link className='action-button' to='/confirmation'>Submit</Link>
        </form>
    );
};