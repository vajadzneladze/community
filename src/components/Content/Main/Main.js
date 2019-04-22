import React, { PureComponent } from 'react';

class Main extends PureComponent {
    
    render() { 
        const subjects  = this.props.items.subjects ? this.props.items.subjects.map( subject => {
               return  <li key ={ parseFloat(subject.id) }>  <i className="fa-li fa fa-book fa-fw text-warning"></i> { subject.title } </li>
            }) : null
        
        return ( 
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="Main">
                <div className="my-auto">
                    <h1 className="mb-0">ძნელაძე  
                        <span className="text-primary"> ვაჟა </span>
                    </h1>
                    <div className="subheading mb-5">
                            { this.props.items.address } , მობილური  :  { this.props.items.phone } .
                            <a href=""> { this.props.items.email } </a>
                    </div>
                    <p className="lead mb-5"> { this.props.items.roles? this.props.items.roles.description : null} </p>
    

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