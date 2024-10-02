import { getServices } from '@data';
import { HomeItem } from '@components';

export default async () => {
  const services = await getServices();
  return (
    <div className="grid grid-col-1 lg:grid-cols-3">
      {services &&
        services.map((service, index) => (
          <HomeItem key={service.filename} service={service} index={index} />
        ))}
    </div>
  );
};
