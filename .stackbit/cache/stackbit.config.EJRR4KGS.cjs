var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/Users/joseph/Git Repository/axiomaticlaw-40346ebf",
      contentDirs: ["content/pages"],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/",
        staticPath: "/images"
      },
      models: [
        {
          name: "discipline",
          type: "page",
          urlPath: "/{id}",
          filePath: "content/pages/{id}.json",
          label: "Discipline",
          fields: [
            { name: "id", type: "string", required: true },
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            {
              name: "compositions",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "id", type: "string", required: true },
                  { name: "title", type: "string", required: true },
                  { name: "description", type: "string" },
                  {
                    name: "sections",
                    type: "list",
                    items: {
                      type: "object",
                      fields: [
                        { name: "id", type: "string", required: true },
                        { name: "title", type: "string", required: true },
                        { name: "content", type: "markdown" }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    })
  ]
});
//# sourceMappingURL=stackbit.config.EJRR4KGS.cjs.map
