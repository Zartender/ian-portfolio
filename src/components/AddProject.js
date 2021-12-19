import { useState } from 'react'

const AddProject = ({ onAdd }) => {
    const [projectTitle, setProjectTitle] = useState('')
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Add Project, Please.')

            return
        }

        onAdd({ projectTitle, text, day, reminder })
        setProjectTitle('')
        setText('')
        setDay('')
        setReminder(false)


    }


    return (
        <form className='add-form'
            onSubmit={onSubmit}>
            <div className='form-control form-control-check'>
                <label>Project</label>
                <input type='text' placeholder='Add Project'
                    value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Text</label>
                <input type='text' placeholder='Add Project'
                    value={text} onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                    checker={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Project'
                className="btn btn-block" />

        </form>
    )
}

export default AddProject
