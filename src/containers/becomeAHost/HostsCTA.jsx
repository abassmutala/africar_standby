import { useNavigate } from "react-router-dom";

const HostsCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 lg:lg:py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-between gap-x-8 text-center">
          <h2 className="AfricarTitle1 pb-4">List your car today</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
            assumenda perspiciatis. Dolore porro perspiciatis minima ex
            aspernatur repellat amet magni ducimus aliquid blanditiis? Repellat
            voluptatem nemo aut id. Eveniet, tempore?
          </p>
          <div className="pt-6">
            <button
              type="submit"
              className="btn-elevated btn-med"
              onClick={() => navigate("/become-a-host/list")}
            >
              <span className="truncate">Get started</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostsCTA;
