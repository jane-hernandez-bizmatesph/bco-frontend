
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AuthPayload": [
      "Error",
      "LoginPayload"
    ],
    "BookableTimesPayload": [
      "BookableTimes",
      "Error"
    ],
    "Message": [
      "Error",
      "Success"
    ],
    "PlanPayment": [
      "ChangeToCreditCard"
    ],
    "StudentHomePopup": [
      "LessonTicketGrantPopup",
      "StudentHomeB2b2cPromotePopup",
      "StudentHomeBannerPopup",
      "StudentHomeLearningVideoPopup",
      "StudentHomeOnlineXPopup",
      "StudentHomePopupData",
      "StudentHomeUnreadNotificationPopup",
      "StudentHomeWelcomeBookingPageTips",
      "StudentHomeWelcomeExistingBetaUsersPopup",
      "StudentHomeWelcomeExistingUsersPopup",
      "StudentHomeWelcomePopup",
      "StudentHomeWelcomePricePageTips"
    ],
    "SubscriptionCharges": [
      "CurrentSubscriptions",
      "PreChargeSubscriptions"
    ],
    "ValidateTokenPayload": [
      "Error",
      "TokenPayload"
    ],
    "_Entity": [
      "Admin",
      "AdminToken",
      "ConsultantToken",
      "Timeslot"
    ]
  }
};
      export default result;
    