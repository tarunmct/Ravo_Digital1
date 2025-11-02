import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../utility/animation';
import { Link } from 'react-router-dom';

const ITServices = () => {
  const pillars = [
    {
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed specifically for your business needs and requirements.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces that provide exceptional user experiences.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Scalable Architecture',
      description: 'Build applications that grow with your business, ensuring performance at any scale.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Agile Methodology',
      description: 'Flexible development processes that adapt to changes and deliver value quickly.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const mernStack = [
    {
      name: 'MongoDB',
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-1.876 1.44-2.906 2.496C5.9 6.818 4.612 9.741 5.38 12.81c.744 2.799 2.564 4.865 5.012 5.856.536.217 1.377.214 1.537.493-.37.547-4.537 2.558-5.832 2.925-.348.081-.765.283-.86.506-.266.64-.613 1.333-1.15 1.844-.948.913-2.173.983-3.275.773-.432-.083-.836-.194-1.23-.352.378-.179.768-.367 1.152-.563 1.098-.551 2.047-1.483 2.915-2.331.211-.209.498-.287.712-.504.287-.292.078-.76-.184-1.069-.676-.731-1.443-1.833-1.773-2.781-.464-1.358-.606-2.78-.204-4.148.795-2.736 2.714-4.764 5.206-5.972 1.693-.81 3.553-1.037 5.35-1.24.338-.038.764-.095 1.084-.173 1.024-.245 1.952-.66 2.955-1.037.387-.145.77-.295 1.156-.444.59-.23 1.222-.446 1.847-.543.346-.055.788-.09 1.137.013 1.02.293 1.962.882 2.825 1.547.544.424.97.917 1.448 1.388.069.069.157.126.224.195.033.034.047.082.08.115.48.535.932 1.106 1.31 1.741.195.326.416.675.534 1.034.057.173.133.339.173.516.074.328.116.665.141 1 .048.639.09 1.279.081 1.918-.003.187-.025.37-.05.554-.053.393-.116.78-.203 1.165-.076.335-.156.665-.25.993-.157.545-.363 1.08-.635 1.576-.118.215-.244.43-.38.634-.276.411-.608.783-.99 1.088-.337.27-.713.496-1.109.673-.335.15-.68.266-1.034.355-.515.13-1.04.18-1.565.193-.241.006-.48-.005-.72-.022-.694-.049-1.388-.138-2.066-.278-.317-.065-.63-.14-.938-.23-.827-.241-1.604-.571-2.33-.984-.676-.384-1.304-.82-1.87-1.307-.356-.307-.698-.634-1.015-.978-.367-.4-.71-.821-1.019-1.265-.166-.239-.32-.487-.46-.74-.234-.418-.448-.846-.64-1.285-.147-.337-.277-.68-.388-1.028-.245-.762-.418-1.538-.51-2.324-.045-.387-.074-.776-.08-1.165-.008-.536.01-1.072.053-1.607.025-.308.063-.614.108-.92.083-.568.195-1.13.347-1.683.138-.5.31-.985.511-1.485.087-.218.163-.442.264-.653.203-.427.455-.832.752-1.204.273-.348.578-.673.909-.968.327-.292.678-.556 1.048-.79.478-.302.989-.554 1.526-.748.293-.107.595-.197.899-.27.498-.12 1.005-.197 1.516-.24.319-.027.64-.035.96-.038.51-.005 1.02.005 1.53.035.325.019.648.052.97.096.614.084 1.223.205 1.818.367.478.13.947.29 1.405.478.458.188.905.398 1.34.632.434.234.855.49 1.26.768.406.277.795.575 1.166.894.371.319.723.658 1.055 1.016.332.358.643.735.931 1.13.288.395.553.808.793 1.235.24.427.455.868.644 1.32.189.452.351.915.485 1.387.134.472.24.953.317 1.44.077.487.115.98.113 1.475-.002.495-.042.988-.119 1.475-.077.487-.183.968-.317 1.44-.134.472-.296.935-.485 1.387-.189.452-.404.893-.644 1.32-.24.427-.505.84-.793 1.235-.288.395-.599.772-.931 1.13-.332.358-.684.697-1.055 1.016-.371.319-.76.617-1.166.894-.405.278-.826.534-1.26.768-.435.234-.882.444-1.34.632-.458.188-.927.348-1.405.478-.595.162-1.204.283-1.818.367-.322.044-.645.077-.97.096-.51.03-1.02.04-1.53.035-.32-.003-.641-.011-.96-.038-.511-.043-1.018-.12-1.516-.24-.304-.073-.606-.163-.899-.27-.537-.194-1.048-.446-1.526-.748-.37-.234-.721-.498-1.048-.79-.331-.295-.636-.62-.909-.968-.297-.372-.549-.777-.752-1.204-.101-.211-.177-.435-.264-.653-.201-.5-.373-.985-.511-1.485-.152-.553-.264-1.115-.347-1.683-.045-.306-.083-.612-.108-.92-.043-.535-.061-1.071-.053-1.607.006-.389.035-.778.08-1.165.092-.786.265-1.562.51-2.324.111-.348.241-.691.388-1.028.192-.439.406-.867.64-1.285.14-.253.294-.501.46-.74.309-.444.652-.865 1.019-1.265.317-.344.659-.671 1.015-.978.566-.487 1.194-.923 1.87-1.307.726-.413 1.503-.743 2.33-.984.308-.09.621-.165.938-.23.678-.14 1.372-.229 2.066-.278.24-.017.479-.028.72-.022.525.013 1.05.063 1.565.193.354.089.699.205 1.034.355.396.177.772.403 1.109.673.382.305.714.677.99 1.088.136.204.262.419.38.634.272.496.478 1.031.635 1.576.094.328.174.658.25.993.087.385.15.772.203 1.165.025.184.047.367.05.554.009.639-.033 1.279-.081 1.918-.025.335-.067.672-.141 1-.04.177-.116.343-.173.516-.118.359-.339.708-.534 1.034-.378.635-.83 1.206-1.31 1.741-.033.033-.047.081-.08.115-.067.069-.155.126-.224.195-.478.471-.904.964-1.448 1.388-.863.665-1.805 1.254-2.825 1.547-.349.103-.791.068-1.137.013-.625-.097-1.257-.313-1.847-.543-.386.149-.769.299-1.156.444-1.003.377-1.931.792-2.955 1.037-.32.078-.746.135-1.084.173-1.797.203-3.657.43-5.35 1.24-2.492 1.208-4.411 3.236-5.206 5.972-.402 1.368-.26 2.79.204 4.148.33.948 1.097 2.05 1.773 2.781.262.309.471.777.184 1.069-.214.217-.501.295-.712.504-.868.848-1.817 1.78-2.915 2.331-.384.196-.774.384-1.152.563.394.158.798.269 1.23.352 1.102.21 2.327.14 3.275-.773.537-.511.884-1.204 1.15-1.844.095-.223.512-.425.86-.506 1.295-.367 5.462-2.378 5.832-2.925-.16-.279-1.001-.276-1.537-.493-2.448-.991-4.268-3.057-5.012-5.856-.768-3.069.52-5.992 2.66-7.758 1.03-1.056 2.183-1.93 2.906-2.496.468-.499.487-.689.523-1.184.205.486.455 1.046.735 1.44.321.701 3.309 2.535 4.573 8.115z" fill="#10AA50"/>
        </svg>
      ),
      color: '#10AA50',
    },
    {
      name: 'Express.js',
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.57-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522-3.283a1.482 1.482 0 00-1.81-.693l.542.916-.295.52a1.215 1.215 0 01-.79-.178 1.562 1.562 0 01-.615-1.1c-.068-.49.207-1.09.773-1.454l4.26-2.853a1.313 1.313 0 011.615.406l5.495 7.643zm-2.76-6.293c.153-.526-.138-1.186-.616-1.47l-1.74-1.02a1.218 1.218 0 00-.79-.178 1.563 1.563 0 01-.614-1.1c-.069-.49.207-1.09.773-1.453l4.26-2.853a1.315 1.315 0 011.616.407L24 10.478l-2.76-6.183zM0 18.588a1.529 1.529 0 001.895-.72l3.45-4.771.5-.667 4.003 5.444a1.466 1.466 0 001.802.708L6.59 12.22l4.798-6.251a1.595 1.595 0 00-1.9.666L6.72 11.055l-3.57-4.81a1.435 1.435 0 00-1.788-.667L0 8.278l2.522-3.283A1.482 1.482 0 014.332 4.26l-.542.916.295.52a1.215 1.215 0 01.79-.178 1.562 1.562 0 01.615-1.1c.068-.49-.207-1.09-.773-1.454L.677.211A1.313 1.313 0 000 .617V18.588z" fill="#ffffff"/>
        </svg>
      ),
      color: '#ffffff',
    },
    {
      name: 'React',
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.489 2.622-1.381-1.662-3.142-2.622-4.488-2.622-3.32 0-5.274 3.78-3.624 7.122-1.15 1.08-1.873 2.558-1.873 4.145 0 3.953 3.52 7.159 7.857 7.159 1.381 0 2.688-.305 3.861-.811 2.116 1.301 4.623 1.301 6.739 0 1.173.506 2.48.811 3.861.811 4.337 0 7.857-3.206 7.857-7.16 0-1.586-.723-3.064-1.873-4.144 1.65-3.343-.303-7.122-3.623-7.122zm-.139 1.724c.888 0 1.628 1.039 2.375 2.238.186.295.38.604.579.922-1.698.901-3.664 1.455-5.777 1.455-.964 0-1.901-.111-2.792-.315 1.062-1.809 2.056-2.938 2.834-2.938.312 0 .595.073.851.21.537-.852 1.12-1.629 1.742-2.296.129.014.255.037.377.073.793.24 1.503.61 2.168 1.033-.406.654-1.141 1.655-2.247 2.656zm-9.778 0c.788 0 1.772 1.128 2.834 2.938-.89.203-1.827.314-2.791.314-2.113 0-4.079-.554-5.777-1.455.199-.318.393-.627.579-.922.747-1.198 1.487-2.237 2.375-2.237.312 0 .595.073.851.21.538-.852 1.12-1.629 1.743-2.296.128.014.255.037.377.073.793.24 1.503.61 2.168 1.033-.406.654-1.141 1.655-2.247 2.656zm9.847 9.789c-1.016.774-2.14 1.278-3.34 1.445-2.224.306-4.52-.344-6.366-1.829-.41-.331-.8-.705-1.16-1.11a7.77 7.77 0 0 1-.913-1.18c.686.154 1.4.237 2.133.237 2.758 0 5.29-1.15 7.135-3.011 1.844 1.861 4.377 3.012 7.134 3.012.733 0 1.447-.083 2.133-.237-.22.42-.46.825-.718 1.208zm1.943-1.584c-.686-.154-1.4-.237-2.133-.237-2.757 0-5.29 1.15-7.135 3.012-1.844-1.861-4.377-3.012-7.134-3.012-.733 0-1.447.083-2.133.237.22-.42.46-.825.718-1.208 1.016-.774 2.14-1.278 3.34-1.445 2.224-.306 4.52.344 6.366 1.829.41.331.8.705 1.16 1.11a7.77 7.77 0 0 1 .913 1.18z" fill="#61DAFB"/>
        </svg>
      ),
      color: '#61DAFB',
    },
    {
      name: 'Node.js',
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.213c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.078c-0.081-0.047-0.189-0.047-0.271,0 L3.075,5.971C2.99,6.021,2.936,6.116,2.936,6.213v11.517c0,0.097,0.054,0.189,0.139,0.239l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V6.434c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v11.34 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,19.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.213 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v11.517c0,0.659-0.354,1.265-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,0.642c0.067,0.052,0.155,0.079,0.247,0.079c0.135,0,0.265-0.054,0.362-0.15l0.977-0.954 c0.128-0.125,0.188-0.298,0.166-0.468c-0.023-0.172-0.12-0.328-0.269-0.424c-0.561-0.363-1.673-0.795-3.623-0.795 c-3.423,0-4.825,1.578-4.825,3.752c0,2.014,1.234,3.132,3.633,3.488c2.613,0.388,3.025,0.627,3.025,1.238 c0,0.931-0.721,1.316-2.558,1.316c-2.008,0-2.953-0.542-3.199-0.897c-0.065-0.093-0.165-0.142-0.268-0.142 c-0.135,0-0.264,0.055-0.362,0.153l-1.028,0.955c-0.084,0.088-0.136,0.197-0.148,0.313c-0.011,0.117,0.02,0.234,0.086,0.333 c0.51,0.766,1.582,1.478,4.013,1.478c3.5,0,4.959-1.691,4.959-3.931V13.993z" fill="#339933"/>
        </svg>
      ),
      color: '#339933',
    },
    {
      name: 'AWS/Azure',
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.078 18.975H2.092l.836-2.874H.394L2.48 5.055h2.586l-.388 1.478c-.072.276-.113.46-.113.552 0 .276.113.552.388.828.184.184.414.276.69.276.414 0 .828-.276 1.104-.828l1.38-2.306h2.494L7.298 14.374c-.276.46-.552.874-.874 1.242a3.024 3.024 0 0 1-1.104.828l.276 1.835c.32-.091.642-.23.966-.414zm7.768-12.97h-2.586l1.518 7.086c.091.46.138.874.138 1.288 0 .69-.184 1.242-.552 1.656a2.386 2.386 0 0 1-1.518.874c-.414.046-.874.046-1.518-.138l.184 1.518c.69.138 1.38.276 2.07.276 1.656 0 2.81-.69 3.542-2.07l2.03-9.45zm6.304 12.97h-6.21l.184-1.518h6.21l.276-1.38h-6.21l.184-1.518h6.488l.276-1.38h-7.178l-.552 2.898 6.21-.276c.46 0 .828.184 1.104.552.184.276.276.642.184.966l-.69 1.38c-.184.368-.506.552-.966.552z" fill="#FF9900"/>
        </svg>
      ),
      color: '#FF9900',
    },
    {
      name: 'Python/AI',
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.864 0L12.87 2.028l-3.618 1.784L6.376.041 3.298 1.966l1.919 3.81-1.784 3.618-2.028 2.994 1.964 2.078 3.811-1.919 3.618 1.784 2.994 2.028 2.078-1.964-1.919-3.811 1.784-3.618 2.028-2.994L15.864 0zM9.324 9.27c-.588 0-1.06-.48-1.06-1.06 0-.587.472-1.059 1.06-1.059.587 0 1.059.472 1.059 1.059 0 .58-.472 1.06-1.059 1.06zm5.352 0c-.588 0-1.06-.48-1.06-1.06 0-.587.472-1.059 1.06-1.059.588 0 1.06.472 1.06 1.059 0 .58-.472 1.06-1.06 1.06z" fill="#3776AB"/>
        </svg>
      ),
      color: '#3776AB',
    },
  ];

  const industries = [
    {
      name: 'E-commerce & Retail',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14v2m6-2v2" />
        </svg>
      ),
      color: '#9333EA',
    },
    {
      name: 'Healthcare & Fitness',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
        </svg>
      ),
      color: '#FBBF24',
    },
    {
      name: 'Education & Coaching',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      color: '#000000',
    },
    {
      name: 'Real Estate & Hospitality',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: '#DC2626',
    },
    {
      name: 'Technology & SaaS',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      color: '#000000',
    },
    {
      name: 'Finance & Banking',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      color: '#059669',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white pt-20 pb-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Left Content */}
            <motion.div
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <h1 className="text-5xl xl:text-6xl font-bold text-[#fdcd2d] leading-tight">
                Innovative Web & App Development
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                We build custom digital solutions that drive growth and efficiency for your business.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#fdcd2d] hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Right Animated Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center items-center relative"
            >
              <div className="relative w-full max-w-lg">
                {/* Devices Container */}
                <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl">
                  {/* Phone */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-56 bg-gray-700 rounded-2xl p-2 shadow-xl"
                  >
                    <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden relative">
                      {/* Animated Gears inside Phone */}
                      <svg className="w-full h-full" viewBox="0 0 120 200">
                        {/* Gear 1 */}
                        <motion.circle
                          cx="60"
                          cy="60"
                          r="25"
                          fill="none"
                          stroke="#fdcd2d"
                          strokeWidth="3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          transformOrigin="60 60"
                        />
                        <motion.circle
                          cx="60"
                          cy="60"
                          r="8"
                          fill="#fdcd2d"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          transformOrigin="60 60"
                        />
                        
                        {/* Gear 2 */}
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="20"
                          fill="none"
                          stroke="#fdcd2d"
                          strokeWidth="2.5"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                          transformOrigin="100 100"
                        />
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="6"
                          fill="#fdcd2d"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                          transformOrigin="100 100"
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Tablet */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-56 h-40 bg-gray-700 rounded-2xl p-2 shadow-xl"
                  >
                    <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden relative">
                      {/* Animated Gears inside Tablet */}
                      <svg className="w-full h-full" viewBox="0 0 220 160">
                        {/* Large Central Gear */}
                        <motion.circle
                          cx="110"
                          cy="80"
                          r="35"
                          fill="none"
                          stroke="#fdcd2d"
                          strokeWidth="4"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          transformOrigin="110 80"
                        />
                        <motion.circle
                          cx="110"
                          cy="80"
                          r="12"
                          fill="#fdcd2d"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          transformOrigin="110 80"
                        />
                        
                        {/* Small Gear Top Right */}
                        <motion.circle
                          cx="170"
                          cy="50"
                          r="18"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                          transformOrigin="170 50"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars of Development Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              The Pillars of Our Development
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="text-[#fdcd2d] mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl xl:text-5xl font-bold text-white mb-3">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-300">
              Building on the <span className="font-bold text-[#fdcd2d]">MERN Stack</span> and beyond for robust solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-8">
            {mernStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 flex flex-col items-center justify-center aspect-square group hover:scale-105 cursor-pointer"
              >
                <div className="mb-3 transition-transform group-hover:scale-110" style={{ color: tech.color }}>
                  {tech.logo}
                </div>
                <p className="text-sm font-semibold text-gray-300 group-hover:text-white text-center">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-gray-400 text-sm max-w-3xl mx-auto"
          >
            We work with modern, robust frameworks and languages to ensure performance, security, and scalability for all our applications.
          </motion.p>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl xl:text-5xl font-bold text-gray-900">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We craft custom digital solutions for businesses across industries. From startups to enterprises, our services cater to every unique domain.
              </p>
            </motion.div>

            {/* Right - Industry Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center aspect-square group cursor-pointer hover:scale-105 border border-gray-100"
                >
                  <div className="mb-3 transition-transform group-hover:scale-110" style={{ color: industry.color }}>
                    {industry.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-tight">
                    {industry.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl xl:text-5xl font-bold">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl text-gray-300">
              Let's turn your idea into a reality. Contact us today to discuss your project and get a free quote.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#fdcd2d] hover:bg-yellow-400 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 mt-6"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;
