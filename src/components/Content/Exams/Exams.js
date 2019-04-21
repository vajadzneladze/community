import React, { PureComponent } from 'react'

class Exams extends PureComponent {
  render() {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Exams">
            <div className="my-auto">
                <h2 className="mb-5">გამოცდები </h2>
                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                    <h3 className="mb-0">heading 1 </h3>
                    <div className="subheading mb-3">ქვანტური ინფორმატიკა</div>
                    <div>ტიპი : არჩევითი  </div>
                    <p>ქულა : 53</p>
                    </div>
                    <div className="resume-date text-md-right">
                    <span className="text-primary">21 იანვარი </span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row">
                    <div className="resume-content mr-auto">
                    <h3 className="mb-0"> heading 2</h3>
                    <div className="subheading mb-3">ინფორმაციული უსაფრთხოების ტექნოლოგიები</div>
                    <div>ტიპი : არჩევითი  </div>
                    <p>ქულა : 28</p>
                    </div>
                    <div className="resume-date text-md-right">
                    <span className="text-primary">14 - 28 იანვარი (არ ვიცი ) </span>
                    </div>
                </div>
            </div>
        </section>

    


    )
  }
}

export default Exams;