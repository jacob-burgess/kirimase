import { Paths } from "./types.js";

export const paths: { t3: Paths; normal: Paths } = {
  normal: {
    drizzle: { dbMigrate: "lib/db/migrate.ts" },
    shared: {
      orm: { dbIndex: "lib/db/index.ts" },
      auth: {
        authUtils: "lib/auth/utils.ts",
        accountPage: "app/account/page.tsx",
        authSchema: "lib/db/schema/auth.ts",
        accountApiRoute: "app/api/account/route.ts",
        navbarComponent: "components/Navbar.tsx",
        signInComponent: "components/auth/SignIn.tsx",
        accountCardComponent: "app/account/AccountCard.tsx",
        userSettingsComponent: "app/account/UserSettings.tsx",
        updateNameCardComponent: "app/account/UpdateNameCard.tsx",
        updateEmailCardComponent: "app/account/UpdateEmailCard.tsx",
      },
      init: { envMjs: "lib/env.mjs" },
    },
    prisma: {},
    trpc: {
      trpcApiTs: "lib/trpc/api.ts",
      trpcUtils: "lib/trpc/utils.ts",
      rootRouter: "lib/server/routers/_app.ts",
      serverTrpc: "lib/server/trpc.ts",
      trpcClient: "lib/trpc/client.ts",
      trpcContext: "lib/trpc/context.ts",
      trpcApiRoute: "app/api/trpc/[trpc]/route.ts",
      trpcProvider: "lib/trpc/Provider.tsx",
    },
    clerk: {
      middleware: "middleware.ts",
      signInApiRoute: "app/sign-in/[[...sign-in]]/page.tsx",
      signUpApiRoute: "app/sign-up/[[...sign-in]]/page.tsx",
    },
    lucia: {
      signUpApiRoute: "app/api/sign-up/route.ts",
      signInApiRoute: "app/api/sign-in/route.ts",
      signOutApiRoute: "app/api/sign-out/route.ts",
      appDTs: "app.d.ts",
      signInPage: "app/sign-in/page.tsx",
      signUpPage: "app/sign-up/page.tsx",
      libAuthLucia: "lib/auth/lucia.ts",
      authFormComponent: "components/auth/Form.tsx",
      signOutButtonComponent: "components/auth/SignOutBtn.tsx",
    },
    resend: {
      emailUtils: "lib/email/utils.ts",
      resendPage: "app/resend/page.tsx",
      emailApiRoute: "app/api/email/route.ts",
      libEmailIndex: "lib/email/index.ts",
      firstEmailComponent: "components/emails/FirstEmail.tsx",
    },
    stripe: {
      stripeIndex: "lib/stripe/index.ts",
      accountBillingPage: "app/account/billing/page.tsx",
      configSubscription: "config/subscriptions.ts",
      stripeSubscription: "lib/stripe/subscription.ts",
      accountRouterTrpc: "lib/server/routers/account.ts",
      billingSuccessToast: "app/account/billing/SuccessToast.tsx",
      subscriptionSchema: "lib/db/schema/subscriptions.ts",
      stripeWebhooksApiRoute: "app/api/webhooks/stripe/route.ts",
      manageSubscriptionApiRoute:
        "app/api/billing/manage-subscription/route.ts",
      accountPlanSettingsComponent: "app/account/PlanSettings.tsx",
      billingManageSubscriptionComponent:
        "app/account/billing/ManageSubscription.tsx",
    },
    "next-auth": {
      signOutButtonComponent: "components/auth/SignOutBtn.tsx",
      nextAuthApiRoute: "app/api/auth/[...nextauth]/route.ts",
      authProviderComponent: "lib/auth/Provider.tsx",
    },
  },
};
