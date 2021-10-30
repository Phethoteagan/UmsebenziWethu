import React from 'react';
import Firebase from './Firebase';
class Test extends React.Component {
constructor(props) {
    
    super(props);
   
    this.state = {studentslist : []}
    }
    
  componentDidMount() {
   
   
     
      Firebase.database().ref("Users").on("value", snapshot => {
        let studentlist = [];
        snapshot.forEach(snap => {
            studentlist.push(snap.val());
        });
        this.setState({ studentslist: studentlist });
      });
    
    
 }
  
  render(){
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center bg-sky">
          <h3>How to show firebase data in reactjs?</h3>
      </div>
    
      <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>FirstName</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
            {this.state.studentslist.map(data => {
                
                return (
                    <tr>     
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>{data.mobileNumber}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          
     </div>
    </div>
  );
}
}
export default Test;