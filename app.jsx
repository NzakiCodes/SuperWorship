 // var React = require('react');
        // var React-dom = require('react-dom');
        // React.createComponent()
        class App extends React.Component{
            render(){
                return ( 
                    <div className="">
                     <Navbar />
                    </div>
                )
            }
        }
        class Navbar extends  React.Component{
            render(){
                 return  (
                             <div className='w3-bar w3-top eas-capsule-bar w3-text-white eas-theme-bar w3-container'>
                                 <div className='top-treat w3-card w3-border-left w3-border-right w3-border-white w3-left'> 
                                     <button  className=' w3-hover-white w3-btn eas-hover-text-pink eas-theme-bar ett' >
                                         <i className='fa fa-more'></i>
                                     </button>
                     
                                     <button  className='sp-btn w3-hover-white w3-btn eas-hover-text-pink eas-theme-bar ett' > 
                                         <i className='fas fa-wrench'></i>  
                                     </button> 
                                     <button title='Scheduel' className='sp-btn w3-hover-white w3-btn eas-hover-text-pink eas-theme-bar eas-active-tab ett' >
                                     <i className='fas fa-list' ></i></button>
                                 </div>
                                 <div className='w3-center'>
                                     <i className='icon icon-home '></i>
                                     <span className='w3-small'> TrueWorship </span>
                                 </div>
                                 <button  className='sp-btn w3-right w3-hover-white w3-btn eas-hover-text-pink eas-theme-bar sp-btn'> 
                                     <i className='fas fa-columns'></i> 
                                 </button>
                             </div>
                         )
            }
        }
        class Buttons extends React.Component{
            render(){
                return (<button className='w3-btn sp-btn'> {this.props.txt} </button>
                )
            }
        }
         var mount = document.querySelector('#app');
         ReactDOM.render(<App message='' user='' />, mount);