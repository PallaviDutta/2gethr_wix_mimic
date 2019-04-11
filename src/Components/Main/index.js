import React, { Fragment } from 'react';
import { Grid, Paper } from '@material-ui/core';
import indexcss from './index.css';
import Button from '@material-ui/core/Button';
import MapLocation from './MapLocation'

export default props =>
    <Fragment>
        {/* Section One */}
        <Grid container>
            <Grid item xs={5}>
                <div style={{ width: '100%', height: '80%', textAlign: 'center', backgroundColor: 'grey' }}>
                    <div style={{ width: '10%', height: '30%' }}></div>
                    <strong><h1 style={{ fontSize: '50px' }}>2gethr</h1></strong>
                    <h4>COWORKING. PRIVATE OFFICES. MANAGED OFFICES</h4>
                </div>
            </Grid>

            <Grid item xs={7}>
                <div style={{ width: '100%', height: '100%' }}>
                    <img src={require('./img/cover1.jpg')} alt='img1' style={{ width: '100%', height: '80%' }} />
                </div>
            </Grid>


        </Grid>
        {/* Section Two */}
        <Grid container>
            <Grid item xs={7}>
                <div style={{ width: '100%', height: '100%' }}>
                    <img src={require('./img/cover1.jpg')} alt='img1' style={{ width: '100%', height: '80%' }} />
                </div>
            </Grid>

            <Grid item xs={5}>
                <div style={{ width: '100%', height: '80%', textAlign: 'center', verticalAlign: 'middle', backgroundColor: 'yellow' }}>
                    <div style={{ width: '10%', height: '20%' }}></div>
                    <strong><h1>OPENING SOON!</h1></strong>
                    <strong><h1>2gethr</h1></strong>
                    <strong><h1>Outer Ring Road</h1></strong>
                    <h5>COWORKING. PRIVATE OFFICES. MANAGED OFFICES</h5>
                    <h4>HOT DESKS</h4>
                    <h4>PRIVATE OFFICES</h4>
                    <h4>MEETING ROOMS</h4>

                </div>
            </Grid>


        </Grid>

        {/* Section Three */}
        <Grid container>
            <Grid item xs={5}>
                <div style={{ width: '100%', height: '89.7%', textAlign: 'center', verticalAlign: 'middle', backgroundColor: 'yellow' }}>
                <div style={{ width: '10%', height: '20%' }}></div>
                    <div>
                        <span style={{ float: 'left', margin: '2%' }}><Button><h2>GEEK STATIONS</h2></Button></span><span style={{ float: 'right', margin: '2%' }}><Button><h2>PLUG AND PLAY</h2></Button></span>
                    </div>
                    <div>
                        <span style={{ float: 'left', margin: '2%' }}><Button><h2>COFFEE BAR</h2></Button></span><span style={{ float: 'right', margin: '2%' }}><Button><h2>INSPIRING COWORKERS</h2></Button></span>
                    </div>
                    <div>
                        <span style={{ float: 'left', margin: '2%' }}><Button><h2>THINK PODS</h2></Button></span><span style={{ float: 'right', margin: '2%' }}><Button><h2>HIGH SPEED INTERNET</h2></Button></span>
                    </div>
                    <div>
                        <span style={{ float: 'left', margin: '2%' }}><Button><h2>LOUNGE AREA</h2></Button></span><span style={{ float: 'right', margin: '2%' }}><Button><h2>COMMUNITY EVENT</h2></Button></span>
                    </div>
                    <div>
                        <span style={{ float: 'left', margin: '2%' }}><Button><h2>LIBRARY MEETINGS</h2></Button></span><span style={{ float: 'right', margin: '2%' }}><Button><h2>PHONE BOOTHS</h2></Button></span>
                    </div>

                </div>
            </Grid>

            <Grid item xs={7}>
                <div style={{ width: '100%', height: '112%' }}>
                    <img src={require('./img/cover1.jpg')} alt='img1' style={{ width: '100%', height: '80%' }} />
                </div>
            </Grid>


        </Grid>



        {/* Section Four */}
        <Grid container>
            <Grid item xs={11}>
                <div style={{ width: '100%', textAlign: 'center', backgroundColor: 'black', margin: '5%' }}>
                    <div>
                        <h1 style={{ color: 'white', paddingTop: '3%' }}>I’m curious about coworking and would love to give it a try.</h1>
                        <h1><span style={{ color: 'white' }}>If that’s you, come hang with us for a day.</span><span style={{ color: 'yellow' }}> it’s on us.</span></h1>
                        <Button style={{ margin: '2%', backgroundColor: 'black', color: 'white', border: '3px solid yellow' }}>Book Your First Date</Button>
                    </div>


                </div>
            </Grid>
        </Grid>

        <h1><div style={{ textAlign: 'center',marginTop:'5%'}}>AMENITIES</div></h1>
        <div className='card1'>   
        <Grid container style={{textAlign:'center'}}>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
        <img src={require('./img/wifi.png')} alt='img1' style={{ width: '30%', height: '40%',marginTop:'5%' }} />
        <h3>High Speed Internet</h3>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
        <img src={require('./img/time.png')} alt='img1' style={{ width: '30%', height: '40%',marginTop:'5%' }} />
        <h3>Open 24/7</h3>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
        <img src={require('./img/coffee-cup.png')} alt='img1' style={{ width: '30%', height: '40%',marginTop:'5%' }} />
        <h3>Unlimited Beverages</h3>
        </Grid>
        <Grid item xs={2}></Grid> 
        </Grid>


        <Grid container style={{textAlign:'center'}}>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
        <img src={require('./img/network.png')} alt='img1' style={{ width: '30%', height: '40%',marginTop:'5%' }} />
        <h3 style={{marginBottom:'20%'}}><div>Network using</div><div>2gethr app</div></h3>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
        <img src={require('./img/interview.png')} alt='img1' style={{ width: '30%', height: '40%',marginTop:'5%' }} />
        <h3>Meeting Rooms</h3>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
        <img src={require('./img/event.png')} alt='img1' style={{ width: '30%', height: '40%',marginTop:'5%' }} />
        <h3>Curated Events</h3>
        </Grid>
        <Grid item xs={2}></Grid> 
        </Grid>
        </div>


        {/* Section Five */}
        <h1><div style={{ textAlign: 'center',marginTop:'5%' }}>OUR LOCATIONS</div></h1>
        <Grid container>
            <Grid item xs className="textonimg">
                <div style={{ width: '100%', height: '100%' }}>
                    <img src={require('./img/cover1.jpg')} alt='img1' style={{ width: '100%', height: '100%' }} />
                    <div className='textcenter'>
                    <h1>2gethr</h1>
                    <h1>@</h1>
                    <h1>HSR</h1>
                    <p>No.11/A-12, 14th Main Road, 4th</p>
                    <p>Cross Road, Sector 5, 1st Sector,</p>
                    <p>HSR Layout, Bengaluru,</p>
                    <p>Karnataka 560034</p>
                </div>
                </div>
            </Grid>
            <Grid item xs className="textonimg">
                <div style={{ width: '100%', height: '100%' }}>
                    <img src={require('./img/cover1.jpg')} alt='img1' style={{ width: '100%', height: '100%' }} />
                    <div className='textcenter'>
                    <h1>2gethr</h1>
                    <h1>@</h1>
                    <h1>ORR</h1>
                    <p>39/5, Mantri Commercio </p>
                    <p>Kariyammana Agrahara Village, </p>
                    <p>Outer Ring Road Varthur,  </p>
                    <p>Uttarahalli Hobli, Bengaluru, </p>
                    <p>Karnataka 560103</p>
                </div>
                </div>
            </Grid>
            <Grid item xs>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }}>
                    <div style={{ width: '10%', height: '1%' }}></div>
                    <h1 style={{ textAlign: 'center' }}>TELL</h1>
                    <h1 style={{ textAlign: 'center',marginBottom:'10%' }}>US</h1>

                    <Grid item xs>
                        <div>
                            <div>
                                <input placeholder='Name' className='inputstyle' />
                            </div>
                            <div>
                                <input placeholder='Email' className='inputstyle'/>
                            </div>
                            <div>
                                <input placeholder='Subject' className='inputstyle'/>
                            </div>

                        </div>
                    </Grid>
                    <div>

                        <textarea rows="5" style={{ float: 'right',width: '42%', borderColor: 'black',marginTop: '-95px',marginRight:'30px' }} placeholder='Message'></textarea>
                    </div>

                    <Button style={{ float: 'right', backgroundColor: 'black', color: 'white',margin: '15px 31px 15px 15px',border: '8px solid yellow' }}>
                        Send
                    </Button>
                    <Grid item xs>
                    </Grid>

                </div>
            </Grid>
        </Grid>


        {/* Section Six */}
        <h1><div style={{ textAlign: 'center',marginTop:'5%' }}>FIND US AT</div></h1>
        <Grid container>
        <Grid item xs>
        <MapLocation/>
        </Grid>
        </Grid>
    </Fragment>
