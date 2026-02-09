declare global {
  interface IntorGeneratedTypes {
    __intor_generated__: true;
    __default__: {
      Locales: "en" | "fr";
      Messages: {
        "{locale}": {
          "hello": string;
          "rich": string;
        };
      };
      Replacements: {
        "{locale}": {
          "hello": {
            "name": string;
          };
        };
      };
      Rich: {
        "{locale}": {
          "rich": {
            "tag": Record<string, never>;
          };
        };
      };
    };
    "default": {
      Locales: "en" | "fr";
      Messages: {
        "{locale}": {
          "hello": string;
          "rich": string;
        };
      };
      Replacements: {
        "{locale}": {
          "hello": {
            "name": string;
          };
        };
      };
      Rich: {
        "{locale}": {
          "rich": {
            "tag": Record<string, never>;
          };
        };
      };
    };
  }
}
export type __dummy = void;