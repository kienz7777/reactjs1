import React, { Component } from 'react';
import NewsItem from './NewsItem';

import Data from './Data.json';

class News extends Component {
    render() {
        console.log(Data);
        
        return (
            <div>
                <div>

                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Danh Sách Tin Tức</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* end-menu */}
                    {/* start tintuc */}
                    <div className="container">
                        <div className="row mt-3">

                            {
                                Data.map((value,key) => {
                                    return(
                                        <NewsItem key = {key}
                                                anh={value.anh}
                                                tinId = {value.id}
                                                tieuDe={value.tieuDe}
                                                trichDan={value.trichDan}> 
                                        </NewsItem>
                                    )
                                })
                            }

                           
                        </div>
                        {/* end tintuc */}
                    </div></div>

            </div>
        );
    }
}

export default News;