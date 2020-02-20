import React, { Component } from 'react';

import Data from './Data.json';
import NewsRelated from './NewsRelated.js';


class NewsDetail extends Component {

    render() {

        console.log(this);
        console.log(this.props.match.params.id);
        console.log(typeof(this.props.match.params.id));

        console.log(typeof(Data[0].id));
        console.log(typeof(parseInt(this.props.match.params.id)));

        Data.map((value) => {
           
            if(value.id === parseInt(this.props.match.params.id))
            {
                console.log(value.tieuDe);
                
            }
            return true;
        })

        var dem = 1;

        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Trang Chi Tiết Tin</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* end-menu */}
                    {/* start tintuc */}
                    
                    {
                        Data.map((value,key) => {

                            
                            if(value.id === parseInt(this.props.match.params.id))
                            {
                                
                                return(
                                    //key = {key} để ở console ko báo lỗi
                                    <div className="jumbotron jumbotron-fluid" key = {key}> 
                                        <div className="container">
                                            <img src={value.anh} alt="repair to jxs" className="img-fluid rong100" />
                                            <h1 className="display-6">{value.tieuDe}</h1>
                                            <p className="lead">{value.trichDan}</p>
                                            <hr className="my-2" />
                                            
                                            {
                                                value.noiDung
                                                
                                            }
                                        </div>
                                    </div>
                                    
                                )
                            }

                            
                            return true;
                           
                            
                        })
                    }

                    <div className="container">
                        <div className="card-body">
                            <h4 className="card-title text-center">Tin liên quan</h4>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-deck">
                                   
                                   {
                                       Data.map((value,key) =>{
                                        
                                        if(value.id !== parseInt(this.props.match.params.id))
                                        {
                                            if(dem <= 4){
                                                dem++;
                                                return(
                                                    <NewsRelated key = {key}
                                                         anh={value.anh}
                                                         tinId = {value.id}
                                                         tieuDe={value.tieuDe}
                                                         trichDan={value.trichDan}>
                                                    </NewsRelated>
                                                )   
                                            }
                                        }   
                                        return true;
                                          
                                       })
                                   }

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end tintuc */}
                </div>

            </div>
        );
    }
}

export default NewsDetail;