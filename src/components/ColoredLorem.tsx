interface ColoredLoremProps {
  color?: string
}

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed lacus maximus, ultricies nisl vel, elementum diam. 
Nunc vel consequat neque. Curabitur tincidunt orci a turpis cursus suscipit. Ut facilisis sem nec accumsan suscipit. 
Nunc metus justo, porttitor sit amet auctor non, egestas non nisl. Morbi imperdiet, enim nec finibus pulvinar, libero 
justo interdum orci, vitae feugiat nisl ex eget massa. In mollis ex non eros suscipit ullamcorper. Nam suscipit arcu 
massa, in lobortis ipsum auctor in. Morbi eget hendrerit est, eget tempor nibh. Sed id dapibus mauris. Vestibulum ante 
ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas non elementum sapien, eu euismod sem.

Suspendisse malesuada ornare neque. Aenean pharetra nibh non metus sagittis porta. Ut quis pretium dolor. Praesent rutrum 
scelerisque sodales. Cras quam lacus, iaculis vitae malesuada nec, dictum et libero. Vestibulum tempor dignissim sem quis 
ultricies. Aliquam vitae libero eget diam imperdiet efficitur. Aenean egestas justo ac risus tincidunt molestie. Sed ac 
fringilla odio. Curabitur eu est fermentum, tincidunt metus quis, tempus ipsum. Donec et turpis sodales, pulvinar diam at, 
accumsan lorem. Integer eget odio sit amet sem lacinia fermentum.
`;

export default function ColoredLorem() {
  const colors = [
    '#77000077',
    '#00770077',
    '#00007777',
    '#77770077',
    '#00777777',
    '#77007777',
  ];

  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return <div style={{backgroundColor: color}}>{loremIpsum}</div>
}