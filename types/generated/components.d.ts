import type { Schema, Attribute } from '@strapi/strapi';

export interface ProyectosGroupColors extends Schema.Component {
  collectionName: 'components_proyectos_group_colors';
  info: {
    displayName: 'groupColors';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    bannerColor: Attribute.Enumeration<
      ['azul', 'naranja', 'naranja claro', 'rojo', 'morado', 'morado claro']
    > &
      Attribute.Required;
    textColor: Attribute.Enumeration<
      ['azul', 'naranja', 'naranja claro', 'rojo', 'morado', 'morado claro']
    > &
      Attribute.Required;
  };
}

export interface ProyectosPalabrasClave extends Schema.Component {
  collectionName: 'components_proyectos_palabras_claves';
  info: {
    displayName: 'palabrasClave';
    icon: 'priceTag';
  };
  attributes: {
    palabraClave: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'proyectos.group-colors': ProyectosGroupColors;
      'proyectos.palabras-clave': ProyectosPalabrasClave;
    }
  }
}
