import React, { PureComponent } from 'react';

class Main extends PureComponent {
    
    render() { 

        const subjects  = this.props.items.length  > 0 ? this.props.items.map( subject => {
               return  <li key ={ parseFloat(subject.id) }>  <i className="fa-li fa fa-book fa-fw text-warning"></i> { subject.title } </li>
            }) : null
        
        return ( 
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="Main">
                <div className="my-auto">
                    <h1 className="mb-0">ძნელაძე
                        <span className="text-primary">ვაჟა</span>
                    </h1>
                    <div className="subheading mb-5">
                            თბილისი დ. გურამიშვილის 80 , მობილური  :  558264564 .
                            <a href="mailto:name@email.com"> vaja.dzneladze@gmail.com </a>
                    </div>
                    <p className="lead mb-5">თბილისის სახელმწიფო უნივერსიტეტის , ზუსტი და საბუნებისმეტყველო მეცნიერების ფაკულტეტის სტუდენტი  . </p>
    

                    <div className="my-auto">
                        <h2 className="subheading mb-5">მიმდინარე სემესტრის   საგნები</h2>
                        <ul className="fa-ul mb-0 subjects">
                            { subjects }
                        </ul>
                    </div>
                </div>
          </section>
        );
    }
}
 
export default Main;