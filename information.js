import React from 'react'
import user from '../../Image/user.png'
import '../../CSS/Information.css'
const information = () => {
  const handleForm=(e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const obj=Object.fromEntries(formData.entries())
    console.log(obj);
  }
  return (
    <>
      <section className="infoSec">
      <form action ="" onSubmit={handleForm}
          autoComplete="off"
          className="add-form"
        >
          <div className="add-user-img">
            <input type="file" id='myImg' accept='image/*'/>
            <label htmlFor="myImg">
             <img src={user} alt="Student Image" />
            </label>
            
          </div>

          {/* student name */}
          <div className="add-container">
            <input
              type="text"
              id="name-input"
              name="Name"
              className="add-input"
              placeholder=""
              /*required*/
            />
            <label htmlFor="name-input" className="input-label">
              Enter Name
            </label>
          </div>

          {/* student contact */}
          <div className="add-container">
            <input
              type="text"
              id="contact-input"
              maxLength="10"
              className="add-input"
              name="Contact-no."
              inputMode="numeric"
              placeholder=""
              pattern="[0-9]{10}"
              /*required*/
            />
            <label htmlFor="contact-input" className="input-label">
              Contact
            </label>
            <div className="contact-validate">
              <i className="ri-error-warning-line"></i> Please enter valid
              number
            </div>
          </div>

          {/* student standard */}
            <div className="occ-container">
              <select required
                name="occupation"
                id="occ-input"
              >
                <option value={0}>Business man</option>
                <option value={1}>Office worker</option>
                <option value={2}>Goverment Worker</option>
                <option value={2}>Retired Goverment Worker</option>
              </select>
              <label htmlFor="occ-input">Occupation</label>
            </div>

          {/* address */}
          <div className="add-container add-address">
            <textarea
              rows="2"
              id="address-input"
              placeholder=""
              name="Address"
              className="add-input"
              maxLength="100"
            ></textarea>
            <label htmlFor="address-input" className="input-label">
              Address
            </label>
          </div>

          {/* buttons */}
          <div className="add-btn-container">
            <button
              type="reset"
              className="cancel-btn"
            >
              Cancel
            </button>
            {/* <button type="submit" className="update-btn">Update</button> */}
            <button type="submit" className="submit-btn">
                Done
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default information
