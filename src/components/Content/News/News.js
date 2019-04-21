import React, { PureComponent } from 'react';

class News extends PureComponent {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="News">
            <div className="my-auto">
               <h2 className="mb-5">სიაახლეები  </h2>

                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                      <h3 className="mb-0">ზჯ</h3>
                      <div className="subheading mb-3">JavaScript - დინამიური WEB- გვერდების პროგრამირება</div>
                      <p>ეუეისი</p>
                    </div>
                    <div className="resume-date text-md-right">
                      <span className="text-primary">ლექტორი სატესტო - 11.02.2019 </span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                      <h3 className="mb-0">vajas</h3>
                      <div className="subheading mb-3">JavaScript - დინამიური WEB- გვერდების პროგრამირება</div>
                      <p>tesqtii</p>
                    </div>
                    <div className="resume-date text-md-right">
                      <span className="text-primary">ვაჟა ძნელაძე - 11.02.2019 </span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                      <h3 className="mb-0">dddd</h3>
                      <div className="subheading mb-3">ინფორმაციული უსაფრთხოების ტექნოლოგიები</div>
                      <p>tttttttttbbbbbbb</p>
                    </div>
                    <div className="resume-date text-md-right">
                      <span className="text-primary">ვაჟა ძნელაძე - 11.02.2019 </span>
                    </div>
                </div>
              
            </div>
          </section>
        );
    }
}

export default News;