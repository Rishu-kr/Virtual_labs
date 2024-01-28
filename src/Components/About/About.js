import React from 'react';
import "./About.css"

export const About = ()=>{

    return(
        <div className='about'>
            <div className='about-xyz'> 
              <div className='about-sub'>
                <img src='Images/hod.png' alt='' className='about-image'></img>
                <div className='text'>
                <h3>Prof. V.C. Srivastava</h3>
                INTEREST:<br/>
                Chemical Engineering, Environmental Engineering, Energy & Fuels, Separation, Catalysis, Pollution Abatement, Wastewater Treatment, Carbon-dioxide utilization, Nano-materials, Desulfurization.
                <h5>
                ✉️ vimal.srivastava@ch.iitr.ac.in
                <br/>
                ☎️ +91-1332-28588
                </h5>
                </div>
              </div>
            </div>
            <div className='about-xyz-1'> 
              <div className='about-sub'>
                <div className='text'>
                <h3>Prof. Vimal Kumar</h3>
                INTEREST:<br/>
                Computational Modelling of Multiphasic Systems, Rheology of Complex Fluids, Interfacial Phenomena, Value-aided Products from Lignocellulosic Biomass.
                <h5>
                ✉️ vimal.kumar.ch.iitr.ac.in
                <br/>
                ☎️ +91-1332-285694
                </h5>
                </div>
                <img src='Images/prof-vimal.png' alt='' className='about-image-1'></img>
              </div>
            </div>
            <div className='about-us'>
                
            </div>

        </div>
    )
}