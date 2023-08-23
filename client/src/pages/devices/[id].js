import DeviceInfo from '../../components/DeviceInfo'

export const getServerSideProps = async (context) =>{
    const {id} = context.params
    const response = await fetch(`http://localhost:5000/api/device/${id}`); 
    const data = await response.json();

    if(!data){
        return{
            notFound: true
        }
    }

    return{
        props: {
            device: data,
        }
    }
}

const DeviceDetailsPage = ({device}) => {
  return (
    <div>
      <h1>Device Details</h1>
      <DeviceInfo device={device}>

      </DeviceInfo>
    </div>
  );
}

export default DeviceDetailsPage;