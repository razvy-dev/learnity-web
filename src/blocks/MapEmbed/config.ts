import type { Block } from 'payload'

export const MapEmbed: Block = {
  slug: 'map',
  interfaceName: 'MapEmbed',
  labels: {
    singular: 'Map',
    plural: 'Map Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Vino să ne vizitezi',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      defaultValue:
        'Suntem localizați central, ușor de găsit și mereu bucuroși să primim vizitatori. Te așteptăm!',
    },
    {
      name: 'embedUrl',
      type: 'text',
      label: 'Google Maps embed URL',
      required: true,
      defaultValue:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8272833334277!2d26.12669317670501!3d44.43670500140456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff29423828e1%3A0x3b1df70f8b904c25!2sStrada%20Duzilor%2023%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sen!2sro!4v1746787133637!5m2!1sen!2sro',
      admin: {
        description: 'Paste the full URL from the iframe `src` attribute.',
      },
    },
    {
      name: 'mapHeight',
      type: 'number',
      label: 'Map height (px)',
      defaultValue: 450,
    },
  ],
}
