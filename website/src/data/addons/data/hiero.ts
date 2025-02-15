import { type Addon } from "../types";

const addon: Addon = {
    title: "Hiero",
    description :`
Professional-grade video editing and compositing software designed for film, TV,
and commercial post-production, offering seamless collaboration, streamlined workflows,
and efficient management of complex projects.

**Variants**: _Hiero_, _NukeStudio_

**Versions**: \`11.3\`, \`12.2\`, \`13.2\`, \`14.0\`
    `,
    preview: "hiero.png",
    features: [
        "workfiles",
        "loader",
        "publisher",
        "sceneManager",
        "libraryLoader",
        "reviewables",
        "burnins",
        "colorManaged"
    ],
    families: [
        "audio",
        "plate",
        "review",
        "frame",
        "effect",
        "workfile",
    ],
    docs: {
        user: "artist_hosts_hiero",
        admin: "admin_hosts_hiero",
    },
    github: "https://github.com/ynput/OpenPype/tree/develop/openpype/hosts/hiero",
};

export default addon;
