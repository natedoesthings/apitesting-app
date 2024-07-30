'use client'


const SaveForm = () => {
  return (
    <div className="div-wrapper">
          <form className="flex items-center">
            <input className="text-wrapper-5" placeholder="Enter name:" ></input>
            <button className="save-button" type='submit' onClick={console.log("dskdjhsd")}>
              <div className="text-wrapper-6">Save</div>
            </button>
          </form>

        </div>
  )
}

export default SaveForm