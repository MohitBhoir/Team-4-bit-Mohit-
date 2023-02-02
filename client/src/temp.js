import React from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "leaflet/dist/leaflet.js"
import osm from './osm_provider'
// import LeafletControlGeocoder from './LeafletControlGeocoder'
import LocationMarker from './userloaction'

const FindDoctor=()=>{   
     const center={ lat:19.29994011,lng:72.85085835 };
     const ZOOm_LEVEL=20;
    //  const Mapref= useRef()
    return <div className="finddoc">
            <div className="headingSection">
              <h1 className="finddoc_heading">
                Search for a Hospital
              </h1>
                <h3 className="finddoc_subHeading">
                Discover the best Clinics, Hospitals, near you!!
              </h3>
            </div>
            <div className="map_container">
                <MapContainer
                center={center}
                zoom={ZOOm_LEVEL}
                >
                    <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}></TileLayer>
                    {/* <LeafletControlGeocoder/> */}
                    <LocationMarker />
                    {/* <Livetracker/> */}
                </MapContainer>
                
            </div>
        </div>    
}  


export default FindDoctor