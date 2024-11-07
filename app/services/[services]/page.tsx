import ServiceDetails from '@/components/ServiceDetails';

interface ServiceData {
  name: string;
  title: string;
  description: string;
  image: string;
  longDescription: string;
}

interface ServicePageProps {
  params: {
    service: string; // Change this to string to match the route parameter
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  // Fetch the specific service data based on the params.service
  const serviceData = await fetchServiceData(params.service); // Fetch the service data

  return <ServiceDetails service={serviceData} />;
}

// Mock function to simulate fetching service data
async function fetchServiceData(serviceName: string): Promise<ServiceData> {
  // Here you would fetch the specific service data based on the serviceName
  // For now, we'll just return a mock object
  return {
    name: serviceName,
    title: serviceName,
    description: `Details about the ${serviceName} service.`,
    image: '/hero-image.png',
    longDescription: `Long description about the ${serviceName} service.`,
  };
}
