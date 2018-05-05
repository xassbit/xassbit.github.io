declare var process: {
    ENVIRONMENT: "dev" | "prod",
};

export const ENVIRONMENT = process.ENVIRONMENT;
