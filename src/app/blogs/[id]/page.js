export default async function BlogPage({ params }) {
  const blogId = (await params).id;

  const title = `Blog ${blogId}`;
  const content = `<p>Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis magna ligula tincidunt faucibus; dignissim rutrum porttitor. Dui aptent efficitur tempus ipsum mattis pellentesque nec congue felis. Odio porta dictum malesuada quisque morbi et pretium. Sagittis tempus nisl accumsan condimentum iaculis luctus montes dolor. Nisl dui commodo quam proin dictum nunc molestie commodo faucibus. Varius aenean morbi inceptos posuere aliquet. Posuere lacus vivamus felis suspendisse vehicula et. Egestas quis ad tortor magna ligula nisi aenean ultrices.</p> <p>Turpis molestie posuere imperdiet taciti ridiculus id blandit justo? Dolor interdum torquent leo scelerisque lectus dolor at. Cras cubilia litora primis maecenas porttitor fermentum. Egestas viverra pharetra vivamus nisi maximus. Dis imperdiet lobortis risus vitae duis dui pulvinar ultricies lacus. Eu molestie penatibus donec netus nulla condimentum gravida eleifend. Metus augue mi magnis cursus sociosqu fusce nunc ex. Tempus cubilia quam lacus et nisl magna nec. Curabitur metus vehicula erat tellus mattis.</p> <p>Rhoncus gravida aenean non enim faucibus natoque tellus. Maecenas vestibulum ut; maecenas orci inceptos et libero turpis ac. Egestas malesuada aenean placerat iaculis lobortis est turpis. Magnis vel ad velit nunc class, a convallis magnis commodo. Vestibulum porttitor turpis; efficitur mi at risus sem. Ultricies rutrum eros aptent natoque tellus. Adipiscing tincidunt dui scelerisque, ullamcorper urna pharetra. Aposuere nibh tincidunt et auctor senectus nostra.</p> <p>Commodo rhoncus suscipit, tempus torquent rhoncus nascetur. Fusce torquent curabitur consequat risus arcu phasellus metus netus. Nascetur tempus pellentesque mollis; scelerisque dignissim blandit auctor. In urna nam quam nascetur diam. Tempor sociosqu senectus quam nisl amet! Quisque dolor nullam senectus lacinia ad rutrum. Arcu maecenas sed proin, venenatis nisl class finibus. Eu ex cursus ante litora senectus non faucibus.</p> <p>Dis adipiscing fusce phasellus commodo quisque, lacinia urna nostra. Scelerisque efficitur aptent donec nulla sociosqu convallis. Vivamus cras hendrerit sagittis tellus pharetra arcu morbi. Semper eget quisque neque enim efficitur convallis fusce. Nostra integer nam condimentum suscipit sociosqu mollis. Vestibulum habitasse phasellus curabitur; pharetra phasellus adipiscing. Euismod aptent senectus eu ad purus placerat. Pellentesque tincidunt curae parturient vel convallis tincidunt ad ac eu.`;

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
      <div>
        <div
          className="prose lg:prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
};
