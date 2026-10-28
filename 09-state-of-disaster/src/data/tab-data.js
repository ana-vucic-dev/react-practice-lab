import StateContent from '../components/StateContent.jsx';
import PropsContent from '../components/PropsContent.jsx';
import ComponentIdentityContent from '../components/ComponentIdentityContent.jsx';
import StateDestroyerContent from '../components/StateDestroyerContent.jsx';

export const TAB_DATA = [
  {
    id: 'state',
    label: 'State',
    icon: 'bi bi-sd-card',
    activeIcon: 'bi bi-sd-card-fill',
    title: 'State: The Situation Is Under Control',
    subtitle: 'Until someone touches something.',
    Content: StateContent
  },
  {
    id: 'props',
    label: 'Props',
    icon: 'bi bi-box',
    activeIcon: 'bi bi-box-fill',
    title: "Props: It's Not My Problem",
    subtitle: 'Data arrives. Responsibilities are delegated.',
    Content: PropsContent
  },
  {
    id: 'component-identity',
    label: 'Component Identity',
    icon: 'bi bi-key',
    activeIcon: 'bi bi-key-fill',
    title: 'Component Identity: Who Even Are You?',
    subtitle: 'React remembers components. Sometimes a little too well.',
    Content: ComponentIdentityContent
  },
  {
    id: 'dont-click',
    label: "Don't Click Here",
    icon: 'bi bi-exclamation-triangle',
    activeIcon: 'bi bi-exclamation-triangle-fill',
    title: 'You Were Warned.',
    subtitle: 'Consequences have entered the chat.',
    Content: StateDestroyerContent
  }
];
