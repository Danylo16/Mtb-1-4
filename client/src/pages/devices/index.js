import Link from 'next/link';

const DevicePage = ({ devices }) => {
    return (
      <div>
        <h1>Devices</h1>
        <ul>
          {devices.map((device) => (
            <li>
              <Link href={`/devices/${device.id}`}>
                {device.name} ({device.price} грн)
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export async function getStaticProps() {
    const response = await fetch('http://localhost:5000/api/device'); 
    const data = await response.json();
  
    if(!data){
      return{
          notFound: true
      }
    }
    
    return {
      props: {
        devices: data,
      },
    };
  }
  
  export default DevicePage;