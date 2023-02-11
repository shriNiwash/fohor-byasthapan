import React from 'react'
import Navbar from './component/navbar'
import Head from 'next/head'
import Script from 'next/script'

export default function upload() {
  return (
<>
  <Head>
  <title>Fohor management</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"  />
  </Head>
  <Navbar />
  <div className='container'>
    <div className="row">
        <div className="col-md-12">
            <div className="table_card">
                <div className="table_header">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="table_title d-inline-block">Poluted Area</div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 mt-2 mt-lg-0">
                            <a href="" className="btn btn-primary float-right btn-sm" id="float_rigth" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-plus"></i>Add Poluted Area</a>
                        </div>
                    </div>
                </div>
                <div className="table_body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-responsive">
                                <div className="dataTables container-fluids ">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="tatabaseTableLenght">
                                                <h6>Show</h6>
                                                <label  >
                                                    
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>10</option>
                                                        <option value="2">50</option>
                                                        <option value="3">100</option>
                                                      </select> 

                                                </label>
                                                <h6>entries</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table className="table table-light table-striped  mt-3 " id="shri-table">
                                                <thead>
                                                  <tr>
                                                    <th scope="col"><input type="checkbox" name="" id="" /></th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Phone Number</th>
                                                    <th scope="col">Images</th>
                                                    <th scope="col">Action</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td><input type="checkbox" name="" id="" /></td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>Otto</td>
                                                    <td>Otto</td>


                                                    <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Cleaned</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Not Cleaned</span> </button></a></td>
                                                  </tr>
                                                  <tr>
                                                    <td><input type="checkbox" name="" id="" /></td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>Otto</td>
                                                    <td>Otto</td>


                                                    <td className="td-data"><a ><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i><span>Cleaned</span></button></a>  <a><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i><span>Not Cleaned</span> </button></a></td>
                                                  </tr>
                    
                    
                                                </tbody>
                                              </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* modal */}

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <form>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Location of Poluted Area</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-12 mt-3">
            <label for="exampleInputEmail1" className="form-label">Title**</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mt-3">
            <label for="exampleInputEmail1" className="form-label">Location**</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mt-3">
            <label for="exampleInputEmail1" className="form-label">Phone Number**</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mt-3">
            <label for="exampleInputEmail1" className="form-label">Images**</label>
            <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</form>
</div>
</div>

  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" ></Script>
  </>
  )
}
