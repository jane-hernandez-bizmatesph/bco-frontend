export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `BigInteger` scalar type represents non-fractional signed whole numeric values.
   * The value has to be smaller than (2^63) and is represented as an integer.
   */
  BigInteger: any;
  /**
   * The `BigIntegerDynamic` scalar type represents non-fractional signed whole numeric values. BigIntegerDynamic has no max size.
   *
   * If the value is smaller than (2^63) then it is represented as a integer.
   * In case the value is bigger than (2^63) it is represented as a string.
   */
  BigIntegerDynamic: any;
  /**
   * The `BigIntegerString` scalar type represents non-fractional signed whole numeric values.
   * The value is always represented as a string and has no max size.
   */
  BigIntegerString: any;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A lesson date string with format `Y-m-d` e.g. `2011-05-24 00:30`->`2011-05-23` */
  LessonDate: any;
  /** A date string with format `H:i` e.g. `24:25` */
  LessonProvideTime: any;
  /** A date string with format `H:i` e.g. `05:00` `24:30` */
  LessonTime: any;
  /**
   * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
   * as they may not be parsed correctly on the server side. Use `String` literals if you are
   * dealing with really large numbers to be on the safe side.
   */
  Mixed: any;
  /**
   * The `Percentage` scalar type represents a percentage as a decimal number.
   *
   * When used as input, the value is input as an integer. Meaning 80% is in input as 80.
   * When used as a return type, the value is shown as a decimal number. Meaning 80% will become 0.8
   */
  Percentage: any;
  /** Representation of entities from external services for the root `_entities` field. */
  _Any: any;
  _FieldSet: any;
};

/** 有効な支払い */
export type ActiveCharges = {
  __typename?: 'ActiveCharges';
  /** All Video Package */
  all_video_package?: Maybe<Charge>;
  /** Bizmates Test */
  bizmates_test?: Maybe<Array<Maybe<Charge>>>;
  /** Bizmates Program Video */
  bizmates_video?: Maybe<Charge>;
  /** Bizmates X */
  bizmates_x?: Maybe<Charge>;
  /** Coaching */
  coaching?: Maybe<Charge>;
  /** Online Lesson */
  main?: Maybe<Charge>;
  /** Other Program Video */
  other_video?: Maybe<Array<Maybe<Charge>>>;
};

export type ActiveLearningVideo = {
  __typename?: 'ActiveLearningVideo';
  /** video自体のId. */
  coaching_video_id: Scalars['Int'];
  id: Scalars['ID'];
  /** ビデオが開放された日付 */
  opened_at: Scalars['Date'];
  status: Scalars['Int'];
  /** 開放時のレッスン予約id */
  student_book_id?: Maybe<Scalars['Int']>;
  video?: Maybe<LearningVideo>;
  /** 視聴日時. 未視聴はnull */
  watched_at?: Maybe<Scalars['DateTime']>;
};

export type ActiveLearningVideoInfo = {
  __typename?: 'ActiveLearningVideoInfo';
  /** 未読ビデオ数 */
  unwatched: Scalars['Int'];
  /** Learning Video. 降順 */
  videos?: Maybe<Array<Maybe<ActiveLearningVideo>>>;
};

/** 有効な契約 */
export type ActiveStudentProducts = {
  __typename?: 'ActiveStudentProducts';
  /** All Video Package */
  all_video_package?: Maybe<StudentProduct>;
  /** Bizmates Test */
  bizmates_test?: Maybe<Array<Maybe<StudentProduct>>>;
  /** Bizmates Program Video */
  bizmates_video?: Maybe<StudentProduct>;
  /** Bizmates X */
  bizmates_x?: Maybe<StudentProduct>;
  /** Coaching */
  coaching?: Maybe<StudentProduct>;
  /** Online Lesson */
  main?: Maybe<StudentProduct>;
  /** Other Program Video */
  other_video?: Maybe<Array<Maybe<StudentProduct>>>;
};

export type Admin = {
  __typename?: 'Admin';
  admin_id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  password_is_temp: Scalars['Int'];
  role?: Maybe<Scalars['Int']>;
  status: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

/** A paginated list of Admin items. */
export type AdminPaginator = {
  __typename?: 'AdminPaginator';
  /** A list of Admin items. */
  data: Array<Admin>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AdminToken = {
  __typename?: 'AdminToken';
  admin_id: Scalars['BigInteger'];
  created_at: Scalars['DateTime'];
  token: Scalars['String'];
  token_expiration: Scalars['DateTime'];
  token_id: Scalars['ID'];
  token_status: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

export type Advice = {
  __typename?: 'Advice';
  contract_type: Scalars['Int'];
  end_date: Scalars['Date'];
  id: Scalars['ID'];
  start_date: Scalars['Date'];
  student_status: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type AuthPayload = Error | LoginPayload;

export type AuthResponse = {
  __typename?: 'AuthResponse';
  access_token?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  type?: Maybe<Scalars['String']>;
  usertype?: Maybe<Scalars['Int']>;
};

/** バナー情報 */
export type Banner = {
  __typename?: 'Banner';
  /** alt text */
  alt_text?: Maybe<Scalars['String']>;
  /** 遷移先 */
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** _blankのみ */
  target?: Maybe<Scalars['String']>;
  /** 画像url。src */
  url?: Maybe<Scalars['String']>;
  /** SP用画像url */
  url_sp?: Maybe<Scalars['String']>;
};

export type BasicStudentInfo = {
  __typename?: 'BasicStudentInfo';
  contract_type?: Maybe<Scalars['Int']>;
  contract_type_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  level_id?: Maybe<Scalars['Int']>;
  nickname: Scalars['String'];
  rank_id?: Maybe<Scalars['Int']>;
  start_level_id?: Maybe<Scalars['Int']>;
  start_rank_id?: Maybe<Scalars['Int']>;
  student_id: Scalars['ID'];
};

export type BcoCharge = {
  __typename?: 'BcoCharge';
  charge_type?: Maybe<ChargeTypeName>;
  department_id?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  plan_id?: Maybe<Scalars['Int']>;
  product?: Maybe<BcoProduct>;
  product_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['Date']>;
  student_id?: Maybe<Scalars['Int']>;
};

export type BcoContractStatus = {
  __typename?: 'BcoContractStatus';
  name: Scalars['String'];
};

export type BcoFirstMonthEnrollmentDiscount = {
  __typename?: 'BcoFirstMonthEnrollmentDiscount';
  end_datetime: Scalars['DateTime'];
};

export type BcoPlan = {
  __typename?: 'BcoPlan';
  apply_user_status?: Maybe<Scalars['Int']>;
  charge: Array<BcoCharge>;
  contract_type?: Maybe<Scalars['Int']>;
  department_id?: Maybe<Scalars['Int']>;
  display_order?: Maybe<Scalars['Int']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  package_price?: Maybe<Scalars['Int']>;
  plan_id: Scalars['ID'];
  price_tier_id?: Maybe<Scalars['Int']>;
  text_id?: Maybe<Scalars['Int']>;
};

export type BcoProduct = {
  __typename?: 'BcoProduct';
  charge: Array<BcoCharge>;
  department_id?: Maybe<Scalars['Int']>;
  lesson_type?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  product_id: Scalars['ID'];
  product_type: Scalars['Int'];
  text_id?: Maybe<Scalars['Int']>;
};

export type BcoStudentInfo = {
  __typename?: 'BcoStudentInfo';
  all_coaching_products_desc?: Maybe<Array<Maybe<StudentProductInfo>>>;
  booking_remaining: Scalars['Int'];
  charge_id?: Maybe<Scalars['Int']>;
  contract_paid_at?: Maybe<Scalars['String']>;
  contract_status?: Maybe<BcoContractStatus>;
  display_coaching: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  first_month_enrollment_discount?: Maybe<BcoFirstMonthEnrollmentDiscount>;
  has_google_api_token: Scalars['Boolean'];
  is_begin?: Maybe<Scalars['Boolean']>;
  lesson_platform: Scalars['Int'];
  nickname?: Maybe<Scalars['String']>;
  student_id?: Maybe<Scalars['String']>;
  student_product_id?: Maybe<Scalars['Int']>;
};

export type BcoStudentProduct = {
  __typename?: 'BcoStudentProduct';
  contract_type: ContractTypeName;
  current_date: Scalars['String'];
  end_date: Scalars['String'];
  expire_date: Scalars['String'];
  id: Scalars['ID'];
  main_product: Scalars['Int'];
  no_refresh: Scalars['Int'];
  plan_id: Scalars['Int'];
  product_id: Scalars['Int'];
  refresh_charge_id?: Maybe<Scalars['Int']>;
  start_date: Scalars['String'];
  student_id: Scalars['Int'];
};

export type BcoUser = {
  __typename?: 'BcoUser';
  bco_id: Scalars['ID'];
  table: Scalars['String'];
  typename: Scalars['String'];
};

/** 予約情報 */
export type Book = {
  __typename?: 'Book';
  /** 欠席対象の予約か？ trueの場合キャンセルではなく欠席になる */
  absent: Scalars['Boolean'];
  /** Adminによるキャンセルが行われた */
  admin_cancel: Scalars['Boolean'];
  /** レッスン開始日時 */
  booking_datetime: Scalars['DateTime'];
  /** レッスン終了日時 */
  booking_end_datetime: Scalars['DateTime'];
  /** Cancel可能な予約か？ */
  cancelable: Scalars['Boolean'];
  /** キャンセル期限 */
  cancellation_deadline?: Maybe<Scalars['DateTime']>;
  /** Skypeのコンタクトリクエストボタン表示制御 */
  contact_requested: Scalars['Boolean'];
  /** 契約種別 */
  contract_type?: Maybe<ContractTypeName>;
  /** Discoveryを予約した場合の記事情報 */
  discovery_article?: Maybe<DiscoveryBook>;
  /** レッスン中？ */
  during_lesson: Scalars['Boolean'];
  /** emergencyを送信した？ 0以外は何らかのemergencyを送信済み */
  emergency: Scalars['Int'];
  id: Scalars['ID'];
  /** AssistLessonの予約か？ */
  is_assist_lesson: Scalars['Boolean'];
  /** BizmatesProgramの予約か？ */
  is_bizmates_program: Scalars['Boolean'];
  /** CorporateProgramの予約か？ */
  is_corporate_program: Scalars['Boolean'];
  /** DiscoveryProgramの予約か？ */
  is_discovery_program: Scalars['Boolean'];
  /** MyStageでの予約 */
  is_mystage: Scalars['Boolean'];
  /** OtherProgramの予約か？ */
  is_other_program: Scalars['Boolean'];
  /** skypeでの予約 */
  is_skype: Scalars['Boolean'];
  /** TrialLessonの予約か？ */
  is_trial_lesson: Scalars['Boolean'];
  /** レッスンは終了した？ */
  lesson_ended: Scalars['Boolean'];
  /** どのプラットフォームで予約したか 1->skype/2->MyStage */
  lesson_platform: Scalars['Int'];
  /** レッスン提供日 */
  lesson_provide_date?: Maybe<Scalars['LessonDate']>;
  /** レッスン提供終了時刻 */
  lesson_provide_end_time: Scalars['LessonProvideTime'];
  /** レッスン提供開始時刻 */
  lesson_provide_start_time: Scalars['LessonProvideTime'];
  /** レッスン開始済み */
  lesson_started: Scalars['Boolean'];
  /** 予約に使用したproduct */
  product_id?: Maybe<Scalars['Int']>;
  /** プログラム変更期限 */
  program_change_deadline: Scalars['DateTime'];
  /** プログラム変更が可能か */
  program_changeable: Scalars['Boolean'];
  /** 予約したプログラム表示名 */
  program_display_label: Scalars['String'];
  /** 予約したプログラム */
  program_id: Scalars['Int'];
  /**
   * 表示用のランク情報
   * BizmatesProgramの予約の場合は受講生のrank_idをもとに取得
   */
  rank?: Maybe<Rank>;
  /** 予約したランクid（BizmatesProgramの場合は現在の受講生のrank_idが入る） */
  rank_id?: Maybe<Scalars['Int']>;
  /**
   * trainerからskypeのコンタクトリクエストが来た？
   * 0->未送信/1->送信済み/2->送信できなかった
   */
  request_skype: Scalars['Int'];
  student_id: Scalars['Int'];
  /** 代替トレーナーが充てられた */
  substitute_trainer: Scalars['Boolean'];
  /** トレーナーのスロットid(予約枠のid) */
  teacher_time_table_id: Scalars['Int'];
  /** チケット情報 */
  ticket?: Maybe<Ticket>;
  /** 予約に使用したチケットid */
  ticket_id: Scalars['Int'];
  /** トレーナーのタイムテーブル情報 */
  timetable?: Maybe<TimeTable>;
  /** トレーナー情報 */
  trainer?: Maybe<Trainer>;
  /** 1->表示/0.nullは画面に表示しない(AdminCancelを除く) */
  visible?: Maybe<Scalars['Int']>;
};

export type BookInput = {
  all_student_coaching_products: Scalars['String'];
  booked_by?: InputMaybe<Scalars['ID']>;
  booked_by_type: Scalars['Int'];
  student_contract_type: Scalars['Int'];
  student_id: Scalars['ID'];
  student_product_id: Scalars['ID'];
  time_table_id: Scalars['ID'];
};

export type BookableTimes = {
  __typename?: 'BookableTimes';
  date_slots?: Maybe<Array<Maybe<DateSlots>>>;
  end_time: Scalars['String'];
  start_time: Scalars['String'];
};

export type BookableTimesPayload = BookableTimes | Error;

export type Booking = {
  __typename?: 'Booking';
  booked_by?: Maybe<Scalars['BigInteger']>;
  booked_by_type?: Maybe<Scalars['Int']>;
  booking_datetime: Scalars['String'];
  booking_end_datetime: Scalars['String'];
  booking_id: Scalars['ID'];
  consultant_nickname: Scalars['String'];
  consultant_time_table_id?: Maybe<Scalars['BigInteger']>;
  consultation_date: Scalars['String'];
  consultation_duration: Scalars['String'];
  contract_start_date: Scalars['String'];
  contract_type?: Maybe<Scalars['Int']>;
  created_at: Scalars['String'];
  done: Scalars['Int'];
  resolvable_by: Scalars['Int'];
  session_no: Scalars['Int'];
  status: Scalars['Int'];
  student_display_id: Scalars['String'];
  student_id: Scalars['BigInteger'];
  student_product_id?: Maybe<Scalars['BigInteger']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type BookingList = {
  __typename?: 'BookingList';
  current_page: Scalars['Int'];
  last_page: Scalars['Int'];
  list?: Maybe<Array<Maybe<Booking>>>;
  total: Scalars['Int'];
};

export type CancelNotification = {
  __typename?: 'CancelNotification';
  cancel_datetime: Scalars['DateTime'];
};

/** お支払い方法変更情報 */
export type ChangePaymentMethod = {
  __typename?: 'ChangePaymentMethod';
  /** クレジットカードの下4桁 */
  credit_card_last_digits?: Maybe<Scalars['String']>;
  /** 支払い方法を変更したい契約 */
  current_subscriptions?: Maybe<Array<Maybe<Charge>>>;
  /** 変更前の支払い方法 */
  from_charge_type?: Maybe<Scalars['Int']>;
  /** 変更後の支払い方法 */
  to_charge_type?: Maybe<Scalars['Int']>;
};

/** クレジットカードへ決済方法変更 */
export type ChangeToCreditCard = PlanPayment & {
  __typename?: 'ChangeToCreditCard';
  client_id: Scalars['String'];
  client_token: Scalars['String'];
  commit_intent: Scalars['String'];
  /** 確認画面に表示する文言 */
  confirm_wording?: Maybe<Scalars['String']>;
  create_order_endpoint: Scalars['String'];
  credit_card_capture_endpoint: Scalars['String'];
  credit_card_endpoint: Scalars['String'];
  credit_error_page_link: Scalars['String'];
  /** 有効なクレジットカード情報 */
  has_credit_card_on_file?: Maybe<PaymentMethod>;
  intent: Scalars['String'];
  payment_complete_page_link: Scalars['String'];
  previous_page_link: Scalars['String'];
  vault_credit_card: Scalars['Boolean'];
};

/** 支払い情報 */
export type Charge = {
  __typename?: 'Charge';
  charge_type: ChargeTypeName;
  contract_type?: Maybe<ContractTypeName>;
  department_id?: Maybe<Scalars['Int']>;
  end_date: Scalars['Date'];
  id: Scalars['ID'];
  is_bank: Scalars['Boolean'];
  is_credit_card: Scalars['Boolean'];
  is_paypal_old: Scalars['Boolean'];
  is_paypal_rt: Scalars['Boolean'];
  next_payment_method?: Maybe<NextPaymentMethod>;
  plan?: Maybe<Plan>;
  plan_id: Scalars['Int'];
  product?: Maybe<Product>;
  product_id: Scalars['Int'];
  start_date: Scalars['Date'];
  student_id: Scalars['Int'];
  student_products?: Maybe<Array<Maybe<StudentProduct>>>;
};

export enum ChargeTypeName {
  Bank = 'BANK',
  CreditCard = 'CreditCard',
  Old = 'OLD',
  Rt = 'RT'
}

export type ConsultanTimeSlot = {
  __typename?: 'ConsultanTimeSlot';
  consultant_email?: Maybe<Scalars['String']>;
  consultant_firstname?: Maybe<Scalars['String']>;
  consultant_id?: Maybe<Scalars['Int']>;
  consultant_id_to_display?: Maybe<Scalars['String']>;
  consultant_lastname?: Maybe<Scalars['String']>;
  consultant_nickname?: Maybe<Scalars['String']>;
  time_table_id?: Maybe<Scalars['Int']>;
  time_table_status?: Maybe<Scalars['Int']>;
};

export type ConsultanTimeSlotinput = {
  consultant_id_nickname_or_firstname?: InputMaybe<Scalars['String']>;
  session_date_time?: InputMaybe<Scalars['String']>;
};

export type Consultant = {
  __typename?: 'Consultant';
  consultant_id: Scalars['ID'];
  contract_status?: Maybe<Scalars['Int']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  emergency_contact?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  nickname_kana?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  status: Scalars['Int'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ConsultantLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** A paginated list of Consultant items. */
export type ConsultantPaginator = {
  __typename?: 'ConsultantPaginator';
  /** A list of Consultant items. */
  data: Array<Consultant>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ConsultantToken = {
  __typename?: 'ConsultantToken';
  consultant_id: Scalars['BigInteger'];
  created_at: Scalars['DateTime'];
  token: Scalars['String'];
  token_expiration: Scalars['DateTime'];
  token_id: Scalars['ID'];
  token_status: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

export type ConsultantTokens = {
  __typename?: 'ConsultantTokens';
  consultant_id: Scalars['BigInteger'];
  email: Scalars['String'];
  token: Scalars['String'];
  token_expiration: Scalars['DateTime'];
  token_id: Scalars['ID'];
  token_status: Scalars['Int'];
  token_url: Scalars['String'];
};

/** 契約状況 */
export type ContractStatus = {
  __typename?: 'ContractStatus';
  /** 現在メインプロダクト(オンラインレッスン)契約中か？ */
  is_active: Scalars['Boolean'];
  /**
   * アセスメント受講生か？
   * 契約をしたことが無くアセスメントレッスンを受けてLevel-Rankが設定された状態
   */
  is_assessment: Scalars['Boolean'];
  /**
   * 休会中か？
   * 現在契約しているメインプロダクトは無いが過去に契約していた状態
   */
  is_rest: Scalars['Boolean'];
  /**
   * トライアル受講生か？
   * 契約をしたことが無くLevel-Rankが未設定の状態
   */
  is_trial: Scalars['Boolean'];
  /** トライアル受講生/受講中/休会中 */
  name: Scalars['String'];
};

export type ContractType = {
  __typename?: 'ContractType';
  name?: Maybe<ContractTypeName>;
  type: Scalars['Int'];
};

/** 契約種別 */
export enum ContractTypeName {
  B2B = 'B2B',
  B2B2C = 'B2B2C',
  B2C = 'B2C'
}

export type CreateAdminInput = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type CreateConsultantInput = {
  email: Scalars['String'];
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  nickname_kana?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type CreateStudentInput = {
  biz_student_id: Scalars['BigInteger'];
  nickname: Scalars['String'];
  status?: InputMaybe<Scalars['Int']>;
};

export type CreateTickettInput = {
  end_datetime?: InputMaybe<Scalars['DateTime']>;
  start_datetime?: InputMaybe<Scalars['DateTime']>;
  student_id: Scalars['Int'];
  student_product_id: Scalars['Int'];
  ticket_type: Scalars['Int'];
};

export type CreateTimeSlot = {
  consultant_id: Scalars['Int'];
  session_date: Scalars['String'];
  session_date_time: Scalars['String'];
  session_time_from: Scalars['String'];
  session_time_to?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  type: Scalars['Int'];
};

/** 現在有効なサブスクリプションプロダクトの契約 */
export type CurrentSubscriptions = SubscriptionCharges & {
  __typename?: 'CurrentSubscriptions';
  bank_charges?: Maybe<Array<Maybe<Charge>>>;
  credit_charges?: Maybe<Array<Maybe<Charge>>>;
  /** PayPal OLD支払いのサブスクリプションプロダクトの契約があるか？ */
  has_paypal_old_subscription: Scalars['Boolean'];
  /** 個人契約のサブスクリプションプロダクトの契約があるか？ */
  has_private_payment: Scalars['Boolean'];
  paypal_charges?: Maybe<Array<Maybe<Charge>>>;
};

export type DateSlots = {
  __typename?: 'DateSlots';
  date: Scalars['String'];
  slots?: Maybe<Array<Maybe<Slots>>>;
};

/** 部署情報 */
export type Department = {
  __typename?: 'Department';
  /** 企業情報のID。mst_company.id */
  company_id: Scalars['Int'];
  /** データ管理上のID。department_idのこと */
  id: Scalars['Int'];
  /** 部署の日本語名 */
  name?: Maybe<Scalars['String']>;
  /** 部署の英語名 */
  name_en?: Maybe<Scalars['String']>;
  partner_department?: Maybe<PartnerDepartment>;
};

/** DiscoveryProgramの記事情報 */
export type DiscoveryArticle = {
  __typename?: 'DiscoveryArticle';
  /** 著者 */
  author: Scalars['String'];
  /** 記事内容 */
  content: Scalars['String'];
  id: Scalars['ID'];
  /** 画像Url */
  image_url: Scalars['String'];
  /** 推奨レベル */
  recommended_level: Scalars['Int'];
  /** 0->非公開,1->公開,2->取下げ */
  status: Scalars['Int'];
  /** タイトル */
  title: Scalars['String'];
};

/** Discoveryの予約情報 */
export type DiscoveryBook = {
  __typename?: 'DiscoveryBook';
  /** 記事情報 */
  article?: Maybe<DiscoveryArticle>;
  /** 記事Id */
  discovery_article_id?: Maybe<Scalars['Int']>;
  /** 予約Id */
  student_book_id?: Maybe<Scalars['ID']>;
};

/** Category for Discovery program article */
export type DiscoveryCategory = {
  __typename?: 'DiscoveryCategory';
  /** Category ID */
  id: Scalars['ID'];
  /** Category JP-name */
  name: Scalars['String'];
};

export type Error = Message & {
  __typename?: 'Error';
  message: Scalars['String'];
  status_type?: Maybe<Scalars['Int']>;
};

/** 各プログラム毎のレッスン受講回数 */
export type EvaluationCount = {
  __typename?: 'EvaluationCount';
  /** Assist Lesson */
  assist: Scalars['Int'];
  /** Bizmates Program */
  bizmates: Scalars['Int'];
  /** Discovery */
  discovery: Scalars['Int'];
  /** Other Programs */
  other: Scalars['Int'];
  /** レッスン受講回数 */
  total: Scalars['Int'];
};

/** facebook設定 */
export type FacebookInfo = {
  __typename?: 'FacebookInfo';
  /** 設定メール */
  email?: Maybe<Scalars['String']>;
  /** 最終ログイン日時 */
  last_login_at?: Maybe<Scalars['DateTime']>;
  /** 名前 */
  name?: Maybe<Scalars['String']>;
  /** 登録日 */
  registered_at?: Maybe<Scalars['DateTime']>;
  /** 連携ID。nullじゃない=連携済 */
  uid?: Maybe<Scalars['String']>;
};

/** 初月半額 */
export type FirstMonthEnrollmentDiscount = {
  __typename?: 'FirstMonthEnrollmentDiscount';
  /** 終了日時 */
  end_datetime: Scalars['DateTime'];
};

export type HomeNotification = {
  __typename?: 'HomeNotification';
  /** 通知情報 */
  notifications?: Maybe<Array<Maybe<Notification>>>;
  /** 未読数 */
  unread_count: Scalars['Int'];
};

export type LearningVideo = {
  __typename?: 'LearningVideo';
  /** 表示用ビデオタイトル */
  display_title?: Maybe<Scalars['String']>;
  /** coaching_video_id */
  id: Scalars['ID'];
  /** jstream id */
  jstream_video_id: Scalars['Int'];
  /** 採番 */
  number: Scalars['Int'];
  /** カテゴリ */
  phase: Scalars['Float'];
  /** ビデオタイトル(必要なし？ リストへの表示はdisplay_title) */
  title?: Maybe<Scalars['String']>;
};

export type LessonEmergencyReason = {
  __typename?: 'LessonEmergencyReason';
  id: Scalars['ID'];
  name: Scalars['String'];
  platform: Scalars['Int'];
};

export type LessonEvaluate = {
  __typename?: 'LessonEvaluate';
  detail?: Maybe<Scalars['String']>;
  evaluation_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  student_id?: Maybe<Scalars['Int']>;
  teacher_id?: Maybe<Scalars['Int']>;
  vote_type_id?: Maybe<Scalars['Int']>;
  vote_value?: Maybe<Scalars['Int']>;
};

export type LessonHabit = {
  __typename?: 'LessonHabit';
  /** 除外目標レッスン数 */
  exclude_lesson: Scalars['Int'];
  /** 上昇率 */
  growth_rate: Scalars['Int'];
  /** 今週のレッスン受講数 */
  lesson_count: Scalars['Int'];
  /** 週間レッスン目標数 */
  lesson_objective: Scalars['Int'];
  /** 現在の達成率 */
  rate: Scalars['Int'];
  /** 今週の残り日数 */
  remaining_days: Scalars['Int'];
  /** 達成までの残レッスン数 */
  remaining_lesson_count: Scalars['Int'];
};

/** 予約関連の変更通知 */
export type LessonNotification = {
  __typename?: 'LessonNotification';
  cancel_lesson?: Maybe<Array<Maybe<CancelNotification>>>;
  trainer_feedback?: Maybe<TrainerFeedbackNotification>;
};

/** レッスン受講回数目標設定情報 */
export type LessonObjective = {
  __typename?: 'LessonObjective';
  /**
   * - 次週からのレッスン受講回数目標
   * - 設定されていない場合はnullを返却
   * - 設定されている場合はレッスン受講回数目標設定画面の選択肢のデフォルト値に使われる
   */
  next_objective?: Maybe<Scalars['Int']>;
  /**
   * - 現在のレッスン受講回数目標
   * - next_lesson_objectiveがnullの場合はこちらがレッスン受講回数目標設定画面の選択肢のデフォルト値に使われる
   */
  objective: Scalars['Int'];
};

export type LessonRequestDate = {
  __typename?: 'LessonRequestDate';
  date: Array<Scalars['LessonTime']>;
};

/** LessonTicket付与プログラム */
export type LessonTicketGrantPopup = StudentHomePopup & {
  __typename?: 'LessonTicketGrantPopup';
  /** 既読時に使用するid */
  campaign_id: Scalars['Int'];
  /** LessonTicketGranted */
  type: Scalars['String'];
};

export type Lessons = {
  __typename?: 'Lessons';
  lesson_code?: Maybe<Scalars['String']>;
  lesson_id: Scalars['ID'];
  lesson_no?: Maybe<Scalars['Int']>;
  material_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  rank_id?: Maybe<Scalars['Int']>;
  video_id?: Maybe<Scalars['Int']>;
};

/** レベル情報 */
export type Level = {
  __typename?: 'Level';
  /** 表示レベル */
  level: Scalars['Int'];
  /** レベルのid */
  level_id: Scalars['Int'];
  /** 表示されるレベル名(英語) */
  name: Scalars['String'];
  /** 表示されるレベル名(日本語) */
  name_jp?: Maybe<Scalars['String']>;
  /** プログラムのid */
  program_id: Scalars['Int'];
};

/** OtherProgram表示構造 */
export type LevelRange = {
  __typename?: 'LevelRange';
  /** 推奨レベル範囲 */
  level_range: Scalars['Int'];
  rank_id: Scalars['ID'];
  /** 表示される行. 位置 */
  row_num: Scalars['Int'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  access_token: Scalars['String'];
  expires_in: Scalars['Int'];
  login_type: Scalars['String'];
  password_is_temp?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
};

export type MbtiToken = {
  __typename?: 'MBTIToken';
  time: Scalars['Int'];
  token: Scalars['String'];
};

export type Message = {
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  adminRequestResetPassword: Message;
  adminResetPasswordByToken: Message;
  bcoLogin: AuthResponse;
  book: Message;
  cancelBooking: Message;
  checkConsultantEmailAvailability?: Maybe<Message>;
  checkConsultantNicknameAvailability?: Maybe<Message>;
  checkPassword?: Maybe<Message>;
  consultantLogin: AuthPayload;
  consultantRequestResetPassword: Message;
  consultantResetPasswordByToken: Message;
  createAdmin?: Maybe<Message>;
  createConsultant?: Maybe<Message>;
  createStudent?: Maybe<Message>;
  createTimeSlot?: Maybe<Message>;
  deleteConsultant?: Maybe<Message>;
  deleteConsultantToken?: Maybe<Message>;
  deleteTimeslot?: Maybe<Message>;
  generateMBTIToken: MbtiToken;
  /** 達成度更新。レッスン終了時にレッスン数をカウントアップ */
  increment_lesson_habit?: Maybe<LessonHabit>;
  login: AuthPayload;
  notification_read?: Maybe<Result>;
  refreshConsultantToken?: Maybe<Message>;
  refreshToken: LoginPayload;
  registerConsultantEmail?: Maybe<Message>;
  resendConsultantToken?: Maybe<Message>;
  saveTicket?: Maybe<Message>;
  setTentativeTimeslotReservation?: Maybe<Message>;
  updateAdmin?: Maybe<Message>;
  updateAdminPassword?: Maybe<Message>;
  updateConsultant?: Maybe<Message>;
  updateConsultantByToken: AuthPayload;
  updateDone: Message;
  updateResolver: Message;
  updateStudent?: Maybe<Message>;
  updateTimeSlot?: Maybe<Message>;
  /**
   * 達成目標設定。
   * @var lesson_objective 週間目標数。nullで未設定
   */
  update_lesson_objective?: Maybe<LessonObjective>;
  update_student_lesson_request?: Maybe<Result>;
  /** お客様情報設定 > その他　更新 */
  update_student_other_setting?: Maybe<StudentOtherSetting>;
  /** おすすめのトレーナー検索条件更新。デフォルト値更新に使用 */
  update_student_recommended_trainer_setting?: Maybe<RecommendedTrainerSetting>;
  update_student_trainer_request?: Maybe<Result>;
  viewed_lesson_objective_settings_wizard?: Maybe<Result>;
  viewed_lesson_ticket_grant?: Maybe<Result>;
  viewed_log_view_mystage_home_tips?: Maybe<Result>;
  vote_trainer_and_lesson?: Maybe<Result>;
};


export type MutationAdminRequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationAdminResetPasswordByTokenArgs = {
  input: AdminResetPasswordByTokenInput;
};


export type MutationBcoLoginArgs = {
  time: Scalars['Int'];
  token: Scalars['String'];
  user_id: Scalars['Int'];
};


export type MutationBookArgs = {
  input?: InputMaybe<BookInput>;
};


export type MutationCancelBookingArgs = {
  booking_id: Scalars['ID'];
  resolvable_by: Scalars['Int'];
};


export type MutationCheckConsultantEmailAvailabilityArgs = {
  email: Scalars['String'];
};


export type MutationCheckConsultantNicknameAvailabilityArgs = {
  consultant_id: Scalars['ID'];
  nickname: Scalars['String'];
};


export type MutationCheckPasswordArgs = {
  admin_id: Scalars['ID'];
  password: Scalars['String'];
};


export type MutationConsultantLoginArgs = {
  input: ConsultantLoginInput;
};


export type MutationConsultantRequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationConsultantResetPasswordByTokenArgs = {
  input: ConsultantResetPasswordByTokenInput;
};


export type MutationCreateAdminArgs = {
  input?: InputMaybe<CreateAdminInput>;
};


export type MutationCreateConsultantArgs = {
  input?: InputMaybe<CreateConsultantInput>;
};


export type MutationCreateStudentArgs = {
  input?: InputMaybe<CreateStudentInput>;
};


export type MutationCreateTimeSlotArgs = {
  input?: InputMaybe<CreateTimeSlot>;
};


export type MutationDeleteConsultantArgs = {
  consultant_id: Scalars['ID'];
};


export type MutationDeleteConsultantTokenArgs = {
  token: Scalars['String'];
};


export type MutationDeleteTimeslotArgs = {
  time_table_id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationNotification_ReadArgs = {
  important?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRegisterConsultantEmailArgs = {
  email: Scalars['String'];
};


export type MutationResendConsultantTokenArgs = {
  consultant_id: Scalars['ID'];
};


export type MutationSaveTicketArgs = {
  input?: InputMaybe<CreateTickettInput>;
};


export type MutationSetTentativeTimeslotReservationArgs = {
  time_table_id: Scalars['ID'];
};


export type MutationUpdateAdminArgs = {
  admin_id: Scalars['ID'];
  input?: InputMaybe<UpdateAdminInput>;
};


export type MutationUpdateAdminPasswordArgs = {
  admin_id: Scalars['ID'];
  input?: InputMaybe<UpdateAdminPasswordInput>;
};


export type MutationUpdateConsultantArgs = {
  consultant_id: Scalars['ID'];
  input?: InputMaybe<UpdateConsultantInput>;
};


export type MutationUpdateConsultantByTokenArgs = {
  input?: InputMaybe<UpdateConsultantInput>;
  token: Scalars['String'];
};


export type MutationUpdateDoneArgs = {
  booking_id: Scalars['ID'];
  done: Scalars['Int'];
};


export type MutationUpdateResolverArgs = {
  booking_id: Scalars['ID'];
  resolvable_by: Scalars['Int'];
};


export type MutationUpdateStudentArgs = {
  input?: InputMaybe<UpdateStudentInput>;
  student_id: Scalars['ID'];
};


export type MutationUpdateTimeSlotArgs = {
  input?: InputMaybe<UpdateTimeSlot>;
  time_table_id: Scalars['ID'];
};


export type MutationUpdate_Lesson_ObjectiveArgs = {
  lesson_objective?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdate_Student_Lesson_RequestArgs = {
  input?: InputMaybe<Array<UpdateLessonRequestInput>>;
};


export type MutationUpdate_Student_Other_SettingArgs = {
  disable_booking_promotion: Scalars['Boolean'];
  disable_lesson_vote: Scalars['Boolean'];
  old_design: Scalars['Boolean'];
};


export type MutationUpdate_Student_Recommended_Trainer_SettingArgs = {
  input: UpdateStudentRecommendedTrainerSettingInput;
};


export type MutationUpdate_Student_Trainer_RequestArgs = {
  input?: InputMaybe<Array<UpdateTrainerRequestInput>>;
};


export type MutationViewed_Lesson_Ticket_GrantArgs = {
  campaign_id: Scalars['Int'];
};


export type MutationVote_Trainer_And_LessonArgs = {
  characteristic?: InputMaybe<Array<InputMaybe<VoteByStudent>>>;
  lesson?: InputMaybe<Array<InputMaybe<VoteByStudent>>>;
  lesson_id: Scalars['Int'];
  teacher_id: Scalars['Int'];
};

/** 次回支払い方法情報 */
export type NextPaymentMethod = {
  __typename?: 'NextPaymentMethod';
  /** 支払い方法が変更されたか？ */
  method_updated: Scalars['Boolean'];
  /** 次回支払い方法のデータ管理上のID */
  next_payment_method_id: Scalars['Int'];
  /** 支払い方法情報 */
  payment_method?: Maybe<PaymentMethod>;
  /** 更新元チャージID */
  previous_charge_id: Scalars['Int'];
};

export type Notification = {
  __typename?: 'Notification';
  /** 本文 */
  content: Scalars['String'];
  /** true -> 重要なお知らせ */
  important: Scalars['Boolean'];
  /** 表示開始日。 フロントでは未使用 */
  start_time: Scalars['DateTime'];
  /** 件名 */
  subject: Scalars['String'];
};

export type NotificationArea = {
  __typename?: 'NotificationArea';
  /** レッスン変更通知 */
  lesson_notification?: Maybe<LessonNotification>;
  /** パーソナル通知 */
  personal_notification?: Maybe<StudentHomePersonalNotification>;
  /** 日割り返金通知 */
  prorated_refund?: Maybe<ProratedRefund>;
  /** 休会申請情報 */
  rest_apply?: Maybe<Array<Maybe<StudentProduct>>>;
  /** トレーナー変更通知 */
  trainer_changed?: Maybe<Array<Maybe<StudentHomeTrainerChangedNotification>>>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

export type PartnerDepartment = {
  __typename?: 'PartnerDepartment';
  attention_path?: Maybe<Scalars['String']>;
  department_id: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** 支払い方法情報 */
export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  charge_type: Scalars['Int'];
  last_digits?: Maybe<Scalars['String']>;
};

/** plan情報。複数productで1plan等も有り */
export type Plan = {
  __typename?: 'Plan';
  /** 表示順。昇順 */
  display_order?: Maybe<Scalars['Int']>;
  /** 表示されるプラン名 */
  name: Scalars['String'];
  /** パッケージ価格(複数product) */
  package_price: Scalars['Int'];
  plan_id: Scalars['ID'];
};

export type PlanPayment = {
  client_id: Scalars['String'];
  client_token: Scalars['String'];
  /**
   * コミットタイプ
   * ※BooleanではなくStringなので注意
   * true: OrderとCaptureで金額が変わらない場合
   * false: OrderとCaptureで金額を変えたい場合
   */
  commit_intent: Scalars['String'];
  create_order_endpoint: Scalars['String'];
  credit_card_capture_endpoint: Scalars['String'];
  credit_card_endpoint: Scalars['String'];
  credit_error_page_link: Scalars['String'];
  /**
   * 決済タイプ
   * CAPTURE: 即時支払い
   * AUTHORIZE: 決済情報登録と与信取得のみ
   */
  intent: Scalars['String'];
  payment_complete_page_link: Scalars['String'];
  previous_page_link: Scalars['String'];
  vault_credit_card: Scalars['Boolean'];
};

/** 事前申込中のサブスクリプションプロダクトの契約 */
export type PreChargeSubscriptions = SubscriptionCharges & {
  __typename?: 'PreChargeSubscriptions';
  bank_charges?: Maybe<Array<Maybe<Charge>>>;
  credit_charges?: Maybe<Array<Maybe<Charge>>>;
  /** 事前申込中の契約があるか？ */
  has_pre_charge: Scalars['Boolean'];
  paypal_charges?: Maybe<Array<Maybe<Charge>>>;
};

/** 商品 */
export type Product = {
  __typename?: 'Product';
  /** 有効期限nヶ月(other用) */
  available_limit?: Maybe<Scalars['Int']>;
  /** 購入可能な部署id */
  department_id: Scalars['Int'];
  /** BizmatesCoachingか？ */
  is_bizmates_coaching: Scalars['Boolean'];
  /** BizmatesVideoか？ */
  is_bizmates_video: Scalars['Boolean'];
  /** メインプロダクト(OnlineLessonのプロダクト)か？ */
  is_main: Scalars['Boolean'];
  /** 1日に受けられるレッスン数上限(月n回でも日にn回受けられるわけではない) */
  lesson_in_day?: Maybe<Scalars['Int']>;
  /** 受講形式(0->1回/1->毎日/2->月回数) */
  lesson_type?: Maybe<Scalars['Int']>;
  /** 受講単位(毎日n回/月n回) */
  lesson_volume?: Maybe<Scalars['Int']>;
  /** 表示名 */
  name: Scalars['String'];
  product_id: Scalars['ID'];
  /** 商品タイプ。(1->メイン/2->ビデオ/3->other/4->customize/5->all video/6,7->X/8->bizmates test/9->coaching) */
  product_type: Scalars['Int'];
};

export type ProductInfo = {
  __typename?: 'ProductInfo';
  lesson_type?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  product_id: Scalars['Int'];
  product_type?: Maybe<Scalars['Int']>;
};

/** 返金関連情報 */
export type ProratedRefund = {
  __typename?: 'ProratedRefund';
  id: Scalars['ID'];
  /** 返金対象の支払い情報 */
  refund_charge?: Maybe<Array<Charge>>;
  student_id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  /** 受講生にアンロックされたLearning Video */
  active_learning_video?: Maybe<ActiveLearningVideoInfo>;
  active_student_products?: Maybe<ActiveStudentProducts>;
  admin?: Maybe<Admin>;
  admins?: Maybe<AdminPaginator>;
  authMBTI?: Maybe<BcoUser>;
  bco_active_student_charge?: Maybe<BcoCharge>;
  bco_active_student_charges?: Maybe<Array<Maybe<BcoCharge>>>;
  bco_active_student_products?: Maybe<BcoStudentProduct>;
  bco_all_student_info?: Maybe<Array<Maybe<BasicStudentInfo>>>;
  bco_all_student_product_info?: Maybe<Array<Maybe<StudentProductInfo>>>;
  bco_contract_status?: Maybe<ContractStatus>;
  bco_product_info: ProductInfo;
  bco_student_current: BcoStudentInfo;
  bco_student_info: BcoStudentInfo;
  bco_students_active_contract?: Maybe<Array<Maybe<BcoStudentInfo>>>;
  bco_students_by_contract?: Maybe<Array<Maybe<BcoStudentInfo>>>;
  /** BizmatesProgram達成度 */
  bizmates_program_achieve?: Maybe<StudentBizmatesProgramAchieve>;
  bookableTimeslots?: Maybe<BookableTimesPayload>;
  booking?: Maybe<Booking>;
  bookings?: Maybe<BookingList>;
  change_payment_method?: Maybe<ChangePaymentMethod>;
  change_to_credit_card?: Maybe<ChangeToCreditCard>;
  characteristics: Array<TextList>;
  characteristics_by_teacher?: Maybe<Array<Maybe<Text>>>;
  checkPassword?: Maybe<Message>;
  computeNewStartDate: Scalars['String'];
  consultant?: Maybe<Consultant>;
  consultantAuth?: Maybe<Consultant>;
  consultantTimeslot?: Maybe<Timeslots>;
  consultants?: Maybe<ConsultantPaginator>;
  contract_status?: Maybe<ContractStatus>;
  currentDateTime?: Maybe<Scalars['String']>;
  current_advice?: Maybe<Advice>;
  current_subscriptions?: Maybe<CurrentSubscriptions>;
  /**
   * 受講生のDiscovery記事のお気に入りリスト
   * ※未受講の記事のみ取得
   */
  discovery_articles_student_liked?: Maybe<Array<Maybe<DiscoveryArticle>>>;
  discovery_categories?: Maybe<Array<Maybe<DiscoveryCategory>>>;
  filterTimeslot?: Maybe<Timeslots>;
  industry_list: Array<StudentIndustry>;
  isDateDone?: Maybe<Scalars['Boolean']>;
  /** 最後に予約したOtherProgramのid */
  latest_booking_other_rank_id?: Maybe<Scalars['Int']>;
  /** 最も古いLearning Video */
  latest_learning_video?: Maybe<ActiveLearningVideo>;
  lesson_emergency_reason?: Maybe<Array<Maybe<LessonEmergencyReason>>>;
  /** 現在未使用 - studentによるレッスン評価 */
  lesson_evaluate?: Maybe<Array<Maybe<LessonEvaluate>>>;
  /** 習慣化達成度情報 */
  lesson_habit?: Maybe<LessonHabit>;
  /** レッスン受講回数目標設定 */
  lesson_objective?: Maybe<LessonObjective>;
  lesson_request_date?: Maybe<LessonRequestDate>;
  lessons?: Maybe<Array<Maybe<Lessons>>>;
  listAvailableConsultants?: Maybe<Array<Maybe<ConsultanTimeSlot>>>;
  listConsultantToken?: Maybe<Array<Maybe<ConsultantTokens>>>;
  me?: Maybe<Admin>;
  /** student portal listing for trainers */
  new_trainers?: Maybe<TrainerPaginator>;
  notification?: Maybe<HomeNotification>;
  /** StudentHome最上部通知エリア内容 */
  notification_area?: Maybe<NotificationArea>;
  pre_charge_subscriptions?: Maybe<PreChargeSubscriptions>;
  recommended_trainer_lesson_date_list: Array<Maybe<RecommendedTrainerLessonDate>>;
  recommended_trainer_setting?: Maybe<RecommendedTrainerSetting>;
  /** おすすめのトレーナー */
  recommended_trainers?: Maybe<RecommendedTrainers>;
  searchConsultantAvailable?: Maybe<Array<Maybe<ConsultanTimeSlot>>>;
  selectConsultantTimeSlot?: Maybe<Array<Maybe<ConsultanTimeSlot>>>;
  student: Student;
  /** 予約モーダルで予約完了時に表示するバナー */
  student_banner_booking_modal?: Maybe<Array<Maybe<Banner>>>;
  /** StudentHomeに表示するバナー. 主にcoaching関連とか */
  student_banner_top?: Maybe<Array<Maybe<Banner>>>;
  /** StudentHomeに表示するキャンペーンバナー */
  student_banner_top_campaign: StudentBannerTopCampaign;
  student_booking_modal: StudentBookingModal;
  /** お気に入りリスト1件 */
  student_bookmark_list?: Maybe<StudentBookMarkList>;
  /** お気に入りリスト全件 */
  student_bookmark_list_all?: Maybe<Array<Maybe<StudentBookMarkList>>>;
  student_customize_programs?: Maybe<Array<Maybe<Rank>>>;
  /** StudentHome表示時のポップアップ */
  student_home_popup_list?: Maybe<Array<Maybe<StudentHomePopup>>>;
  /** StudentHomeに設置するsprocket tag情報 */
  student_home_sprocket_tags?: Maybe<Array<Maybe<StudentHomeSprocketTag>>>;
  student_info: StudentInfo;
  /** レッスン受講回数 */
  student_lesson_count?: Maybe<EvaluationCount>;
  student_lesson_request: Array<SelectTextList>;
  student_other_programs?: Maybe<Array<Maybe<Rank>>>;
  student_payment_method?: Maybe<Array<Maybe<PaymentMethod>>>;
  student_profile?: Maybe<StudentProfile>;
  student_trainer_request: Array<SelectTextList>;
  students?: Maybe<StudentPaginator>;
  testDatabase: Scalars['String'];
  testGraphql: Scalars['String'];
  timeslot: Scalars['String'];
  trainer_evaluate?: Maybe<Array<Maybe<Vote>>>;
  trainer_info_by_student?: Maybe<TrainerInfoByStudent>;
  trainer_schedule_morning?: Maybe<Array<Maybe<TrainerSchedule>>>;
  trainer_schedule_night?: Maybe<Array<Maybe<TrainerSchedule>>>;
  trainer_schedule_noon?: Maybe<Array<Maybe<TrainerSchedule>>>;
  validateAdminToken?: Maybe<ValidateTokenPayload>;
  validateConsultantToken?: Maybe<ValidateTokenPayload>;
  validateEmail?: Maybe<Message>;
  /** Homeに表示する予約情報 */
  visible_books: Array<Book>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QueryAdminArgs = {
  admin_id?: InputMaybe<Scalars['ID']>;
};


export type QueryAdminsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBco_Active_Student_ChargeArgs = {
  student_id: Scalars['ID'];
};


export type QueryBco_Active_Student_ProductsArgs = {
  student_id: Scalars['ID'];
};


export type QueryBco_All_Student_InfoArgs = {
  students: Array<InputMaybe<Scalars['Int']>>;
};


export type QueryBco_All_Student_Product_InfoArgs = {
  student_products: Array<InputMaybe<Scalars['Int']>>;
};


export type QueryBco_Student_InfoArgs = {
  student_id: Scalars['ID'];
};


export type QueryBco_Students_Active_ContractArgs = {
  input?: InputMaybe<StudentInput>;
};


export type QueryBco_Students_By_ContractArgs = {
  input?: InputMaybe<StudentContarctInput>;
};


export type QueryBookableTimeslotsArgs = {
  end_time: Scalars['String'];
  start_time: Scalars['String'];
  student_id: Scalars['ID'];
  student_product_id: Scalars['ID'];
};


export type QueryBookingArgs = {
  booking_id?: InputMaybe<Scalars['ID']>;
};


export type QueryBookingsArgs = {
  done?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  sort_by?: InputMaybe<Scalars['String']>;
  sort_type?: InputMaybe<Scalars['String']>;
  student_id?: InputMaybe<Scalars['String']>;
  todo?: InputMaybe<Scalars['Int']>;
};


export type QueryCharacteristics_By_TeacherArgs = {
  teacher_id: Scalars['Int'];
};


export type QueryCheckPasswordArgs = {
  consultant_id: Scalars['ID'];
  password: Scalars['String'];
};


export type QueryComputeNewStartDateArgs = {
  input?: InputMaybe<ComputeNewStartDateInput>;
};


export type QueryConsultantArgs = {
  consultant_id?: InputMaybe<Scalars['ID']>;
};


export type QueryConsultantTimeslotArgs = {
  input?: InputMaybe<ConsultantTimeslotInput>;
};


export type QueryConsultantsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryConsultantsWhereWhereConditions>;
};


export type QueryFilterTimeslotArgs = {
  input?: InputMaybe<FilterTimeslotInput>;
};


export type QueryIsDateDoneArgs = {
  date: Scalars['String'];
};


export type QueryLesson_Emergency_ReasonArgs = {
  student_book_id?: InputMaybe<Scalars['Int']>;
};


export type QueryListAvailableConsultantsArgs = {
  input?: InputMaybe<ConsultanTimeSlotinput>;
};


export type QueryNew_TrainersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryNotificationArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryRecommended_TrainersArgs = {
  end_datetime?: InputMaybe<Scalars['DateTime']>;
  female?: InputMaybe<Scalars['Boolean']>;
  male?: InputMaybe<Scalars['Boolean']>;
  start_datetime?: InputMaybe<Scalars['DateTime']>;
};


export type QuerySearchConsultantAvailableArgs = {
  input?: InputMaybe<ConsultanTimeSlotinput>;
};


export type QuerySelectConsultantTimeSlotArgs = {
  input?: InputMaybe<SelectConsultantinput>;
};


export type QueryStudentArgs = {
  nickname?: InputMaybe<Scalars['String']>;
  student_id?: InputMaybe<Scalars['ID']>;
};


export type QueryStudent_Booking_ModalArgs = {
  teacher_time_table_id: Scalars['ID'];
};


export type QueryStudent_Bookmark_ListArgs = {
  id: Scalars['ID'];
};


export type QueryStudentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTrainer_Info_By_StudentArgs = {
  teacher_id: Scalars['ID'];
};


export type QueryTrainer_Schedule_MorningArgs = {
  teacher_id?: InputMaybe<Scalars['Int']>;
};


export type QueryTrainer_Schedule_NightArgs = {
  teacher_id?: InputMaybe<Scalars['Int']>;
};


export type QueryTrainer_Schedule_NoonArgs = {
  teacher_id?: InputMaybe<Scalars['Int']>;
};


export type QueryValidateAdminTokenArgs = {
  token: Scalars['String'];
};


export type QueryValidateConsultantTokenArgs = {
  token: Scalars['String'];
};


export type QueryValidateEmailArgs = {
  email: Scalars['String'];
};

/** Allowed column names for the `where` argument on field `consultants` on type `Query`. */
export enum QueryConsultantsWhereColumn {
  Status = 'STATUS'
}

/** Dynamic WHERE conditions for the `where` argument on the query `consultants`. */
export type QueryConsultantsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryConsultantsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryConsultantsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryConsultantsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryConsultantsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `consultants`. */
export type QueryConsultantsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryConsultantsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** ランク情報 */
export type Rank = {
  __typename?: 'Rank';
  /** 1-> B2C受講生にのみ表示される授業. 0->通常 */
  b2c_only: Scalars['Int'];
  /** 表示レベル */
  level: Scalars['Int'];
  /** 各レベルのid */
  level_id: Scalars['Int'];
  /** レベル情報のモデル */
  level_model?: Maybe<Level>;
  /** レベル範囲 */
  level_range?: Maybe<LevelRange>;
  /** 表示されるランク名(英語) */
  name: Scalars['String'];
  /** 表示されるランク名(日本語) */
  name_jp?: Maybe<Scalars['String']>;
  program_id: Scalars['Int'];
  /** BizmatesProgramは各レベルに5ランク。その他は基本的に1のみ */
  rank: Scalars['Int'];
  rank_id: Scalars['ID'];
  /** 推奨レベル範囲。OtherProgramsの選択モーダル内等用 */
  require_level: Scalars['Int'];
};

/** おすすめトレーナー検索に使う日付 */
export type RecommendedTrainerLessonDate = {
  __typename?: 'RecommendedTrainerLessonDate';
  is_closed_day: Scalars['Boolean'];
  lesson_date: Scalars['Date'];
  lesson_date_label: Scalars['String'];
};

/** 受講生のおすすめトレーナー設定 */
export type RecommendedTrainerSetting = {
  __typename?: 'RecommendedTrainerSetting';
  select_female?: Maybe<Scalars['Boolean']>;
  select_male?: Maybe<Scalars['Boolean']>;
  setting_time_from?: Maybe<Scalars['LessonTime']>;
  setting_time_to?: Maybe<Scalars['LessonTime']>;
};

/** おすすめのトレーナー */
export type RecommendedTrainers = {
  __typename?: 'RecommendedTrainers';
  /** 設定されているトレーナー特徴 */
  characteristics?: Maybe<Array<Maybe<Text>>>;
  /** 設定されているレッスンリクエスト */
  lesson_request?: Maybe<Array<Maybe<Text>>>;
  /** おすすめトレーナーリスト */
  list?: Maybe<Array<Maybe<TrainerInfoByStudent>>>;
  /** 選択日付 */
  select_date?: Maybe<Scalars['Date']>;
  /** 選択 女性 */
  select_female: Scalars['Boolean'];
  /** 選択 男性 */
  select_male: Scalars['Boolean'];
  /** 設定されている時刻from */
  setting_time_from?: Maybe<Scalars['String']>;
  /** 設定されている時刻to */
  setting_time_to?: Maybe<Scalars['String']>;
};

export type Result = {
  __typename?: 'Result';
  message?: Maybe<Scalars['String']>;
  result: Scalars['Boolean'];
};

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE'
}

export type SelectConsultantinput = {
  consultant_id: Scalars['Int'];
  session_date_time: Scalars['String'];
};

export type SelectText = {
  __typename?: 'SelectText';
  id: Scalars['ID'];
  selected: Scalars['Boolean'];
  text: Scalars['String'];
};

export type SelectTextList = {
  __typename?: 'SelectTextList';
  list?: Maybe<Array<Maybe<SelectText>>>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export enum Sex {
  Female = 'female',
  Male = 'male',
  Notset = 'notset'
}

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

export type Slots = {
  __typename?: 'Slots';
  session_date_time: Scalars['String'];
  time: Scalars['String'];
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Student = {
  __typename?: 'Student';
  biz_student_id: Scalars['BigInteger'];
  /** 契約形態 0:B2C,1:B2B,2:B2B2C(パートナー企業を含む) */
  contract_type: Scalars['Int'];
  created_at: Scalars['DateTime'];
  /** 部署情報 */
  department?: Maybe<Department>;
  /** メインのemail */
  email: Scalars['String'];
  /** B2B受講生か？ */
  is_b2b: Scalars['Boolean'];
  /** B2B2C受講生か？ */
  is_b2b2c: Scalars['Boolean'];
  /** B2C受講生か？ */
  is_private: Scalars['Boolean'];
  /** 現在レベルID */
  level_id: Scalars['Int'];
  nickname: Scalars['String'];
  /** 現在ランクID */
  rank_id: Scalars['Int'];
  /** SkypeID */
  skype_name?: Maybe<Scalars['String']>;
  /** 開始時レベルID */
  start_level_id: Scalars['Int'];
  /** 開始時ランクID */
  start_rank_id: Scalars['Int'];
  /** データ管理上の受講生ID */
  student_id: Scalars['ID'];
  token?: Maybe<Scalars['String']>;
  token_expiration_date?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

/** 特典・キャンペーン情報 */
export type StudentBannerTopCampaign = {
  __typename?: 'StudentBannerTopCampaign';
  banner?: Maybe<Array<Maybe<Banner>>>;
  show_new_icon: Scalars['Boolean'];
};

/** BizmatesProgram達成度 */
export type StudentBizmatesProgramAchieve = {
  __typename?: 'StudentBizmatesProgramAchieve';
  level?: Maybe<Scalars['Int']>;
  level_label?: Maybe<Scalars['String']>;
  /** 現在のレッスン達成率 */
  now_lesson_habit: Scalars['Int'];
  /** 現在のレッスンNo */
  now_lesson_no: Scalars['Int'];
  rank_id: Scalars['Int'];
  rank_label?: Maybe<Scalars['String']>;
  /** 次のランクまでの残りレッスン数 */
  remaining_lesson: Scalars['Int'];
};

/** お気に入りリストの中身 */
export type StudentBookMark = {
  __typename?: 'StudentBookMark';
  /** list id */
  bookmark_list_id: Scalars['Int'];
  id: Scalars['ID'];
  teacher_id: Scalars['Int'];
  trainer?: Maybe<Trainer>;
};

/** お気に入りリスト */
export type StudentBookMarkList = {
  __typename?: 'StudentBookMarkList';
  /** リスト名 */
  bookmark_list_name: Scalars['String'];
  id: Scalars['ID'];
  /** true->デフォルトリスト */
  is_default: Scalars['Boolean'];
  /** 中身 */
  list?: Maybe<Array<Maybe<StudentBookMark>>>;
  student_id: Scalars['Int'];
};

/**
 * 予約モーダルに必要な情報を
 * ページ用にまとめて取得
 */
export type StudentBookingModal = {
  __typename?: 'StudentBookingModal';
  available_ticket?: Maybe<Ticket>;
  discovery_articles_student_liked?: Maybe<Array<Maybe<DiscoveryArticle>>>;
  discovery_categories?: Maybe<Array<Maybe<DiscoveryCategory>>>;
  message?: Maybe<Scalars['String']>;
  student_banner_booking_modal?: Maybe<Array<Maybe<Banner>>>;
  time_table?: Maybe<TimeTable>;
  title: Scalars['String'];
};

export type StudentContarctInput = {
  contract_enddate: Scalars['String'];
  contract_startdate: Scalars['String'];
  student_id?: InputMaybe<Scalars['String']>;
};

export type StudentContractType = {
  __typename?: 'StudentContractType';
  /** true->パートナー企業 */
  is_partner: Scalars['Boolean'];
  name?: Maybe<ContractTypeName>;
  /** value */
  type: Scalars['Int'];
};

/** メール受信設定 */
export type StudentEmailSetting = {
  __typename?: 'StudentEmailSetting';
  /** レッスン開始60分前メール */
  before60min: Scalars['Boolean'];
  /** レッスン開始60分前メール　サブアドレス */
  before60min_sub: Scalars['Boolean'];
  /** BizmatesXsメール */
  bizmatesxs_info: Scalars['Boolean'];
  /** 予約メール */
  book: Scalars['Boolean'];
  /** 予約メール　サブアドレス */
  book_sub: Scalars['Boolean'];
  /** キャンセルメール */
  cancel: Scalars['Boolean'];
  /** キャンセルメール　サブアドレス */
  cancel_sub: Scalars['Boolean'];
  /** Bizmates Channelメルマガ */
  channel: Scalars['Boolean'];
  id: Scalars['ID'];
  /** お知らせメール */
  info: Scalars['Boolean'];
  student_id: Scalars['Int'];
  /** Skypeリクエスト通知　サブアドレス */
  tSendRequestSkype_sub: Scalars['Boolean'];
};

/**
 * `gender_id` has multiple enums values
 * this is because there are 'invalid initial values'
 * also, the values for the gender are switched - see table `trn_student_profile`
 */
export enum StudentGender {
  Female = 'female',
  Male = 'male',
  Notset = 'notset'
}

/** B2B2C促進ポップアップ */
export type StudentHomeB2b2cPromotePopup = StudentHomePopup & {
  __typename?: 'StudentHomeB2b2cPromotePopup';
  /** キャンペーン対象か？ */
  campaign_target: Scalars['Boolean'];
  /** 現在の契約終了日 */
  end_date: Scalars['Date'];
  /** 次回契約開始日(予定) */
  next_start_date: Scalars['Date'];
  type: Scalars['String'];
  /** 表示video url */
  video_url?: Maybe<Scalars['String']>;
};

/** バナーポップアップ */
export type StudentHomeBannerPopup = StudentHomePopup & {
  __typename?: 'StudentHomeBannerPopup';
  banner: Banner;
  /** Banner */
  type: Scalars['String'];
};

/** Learning video popup. */
export type StudentHomeLearningVideoPopup = StudentHomePopup & {
  __typename?: 'StudentHomeLearningVideoPopup';
  /** 最も古い未視聴video id */
  not_yet_watched_id?: Maybe<Scalars['Int']>;
  /** LearningVideo */
  type: Scalars['String'];
  /** videoリスト */
  videos?: Maybe<Array<Maybe<ActiveLearningVideo>>>;
};

/** online x バナー */
export type StudentHomeOnlineXPopup = StudentHomePopup & {
  __typename?: 'StudentHomeOnlineXPopup';
  /** OnlineX */
  type: Scalars['String'];
};

export type StudentHomePersonalNotification = {
  __typename?: 'StudentHomePersonalNotification';
  broadcast_from: Scalars['DateTime'];
  /** 本文 */
  content: Scalars['String'];
  id: Scalars['ID'];
  /** タイトル */
  subject: Scalars['String'];
};

/** StudentHome表示時のpopup. */
export type StudentHomePopup = {
  type: Scalars['String'];
};

/** StudentHomePopup */
export type StudentHomePopupData = StudentHomePopup & {
  __typename?: 'StudentHomePopupData';
  type: Scalars['String'];
};

/** sprocket tag */
export type StudentHomeSprocketTag = {
  __typename?: 'StudentHomeSprocketTag';
  /** sprocketタグに追加するクラス。動作自体には関わらない */
  class: Scalars['String'];
  /** sprocketタグに追加する要素。 key='{key}' */
  key: Scalars['String'];
  /** sprocketタグに追加する要素。 value='{value}' */
  value: Scalars['String'];
};

export type StudentHomeTrainerChangedNotification = {
  __typename?: 'StudentHomeTrainerChangedNotification';
  book: Book;
  created_at: Scalars['DateTime'];
  trainer: Trainer;
};

/** 未読通知 */
export type StudentHomeUnreadNotificationPopup = StudentHomePopup & {
  __typename?: 'StudentHomeUnreadNotificationPopup';
  /** 通知内容 */
  content: Scalars['String'];
  id: Scalars['ID'];
  /** 件名 */
  subject: Scalars['String'];
  /** Notification */
  type: Scalars['String'];
};

/** 初回予約促進Tips */
export type StudentHomeWelcomeBookingPageTips = StudentHomePopup & {
  __typename?: 'StudentHomeWelcomeBookingPageTips';
  type: Scalars['String'];
};

/** MyStage説明ポップアップ。MyStageベータに参加していた受講生用 */
export type StudentHomeWelcomeExistingBetaUsersPopup = StudentHomePopup & {
  __typename?: 'StudentHomeWelcomeExistingBetaUsersPopup';
  type: Scalars['String'];
};

/** MyStage説明ポップアップ。MyStageリリース前に存在していた受講生用 */
export type StudentHomeWelcomeExistingUsersPopup = StudentHomePopup & {
  __typename?: 'StudentHomeWelcomeExistingUsersPopup';
  type: Scalars['String'];
};

/** 登録後初回ログイン */
export type StudentHomeWelcomePopup = StudentHomePopup & {
  __typename?: 'StudentHomeWelcomePopup';
  /** 通常の契約状況より細分化されている */
  contract_status: Scalars['Int'];
  /** ニックネーム更新が完了しているか？ */
  nickname_changed: Scalars['Boolean'];
  type: Scalars['String'];
};

/** トライアル受講後有料会員登録促進Tips */
export type StudentHomeWelcomePricePageTips = StudentHomePopup & {
  __typename?: 'StudentHomeWelcomePricePageTips';
  type: Scalars['String'];
};

/** 業種 */
export type StudentIndustry = {
  __typename?: 'StudentIndustry';
  id: Scalars['ID'];
  /** 和名 */
  name: Scalars['String'];
  /** 英名 */
  name_en: Scalars['String'];
};

export type StudentInfo = {
  __typename?: 'StudentInfo';
  /** 残予約数 */
  booking_remaining: Scalars['Int'];
  /** 受講生の現在の契約状況 */
  contract_status?: Maybe<ContractStatus>;
  /** coaching表示対象か */
  display_coaching: Scalars['Boolean'];
  first_month_enrollment_discount?: Maybe<FirstMonthEnrollmentDiscount>;
  /** googleカレンダー連携済か */
  has_google_api_token: Scalars['Boolean'];
  /** begin対象者か */
  is_begin?: Maybe<Scalars['Boolean']>;
  /** レッスンプラットフォーム名 */
  lesson_plat_form_name: Scalars['String'];
  /** レッスンプラットフォーム */
  lesson_platform: Scalars['Int'];
  nickname?: Maybe<Scalars['String']>;
  /** 画面表示用student id. S00000000000 */
  student_display_id: Scalars['String'];
  student_id: Scalars['Int'];
  /** 本日使用可能なチケットの内訳 */
  ticket_count_info: TicketCountInfo;
};

export type StudentInput = {
  student_id?: InputMaybe<Scalars['String']>;
};

/** その他設定 */
export type StudentOtherSetting = {
  __typename?: 'StudentOtherSetting';
  /**  レッスン後、次回レッスン予約促進を表示しない */
  disable_booking_promotion: Scalars['Boolean'];
  /** レッスン後、評価画面を表示しない */
  disable_lesson_vote: Scalars['Boolean'];
  /** 旧デザインを適用する */
  old_design: Scalars['Boolean'];
};

/** A paginated list of Student items. */
export type StudentPaginator = {
  __typename?: 'StudentPaginator';
  /** A list of Student items. */
  data: Array<Student>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** 契約情報 */
export type StudentProduct = {
  __typename?: 'StudentProduct';
  /** 支払い情報 */
  charge: Charge;
  contract_type?: Maybe<ContractTypeName>;
  /** 契約終了日 */
  end_date: Scalars['Date'];
  /** 契約失効日 */
  expire_date: Scalars['Date'];
  id: Scalars['ID'];
  /** main product(online lesson)->1/他->0 */
  main_product: Scalars['Int'];
  /** 休会申請中->1/0->通常 */
  no_refresh: Scalars['Int'];
  plan_id: Scalars['Int'];
  product_id: Scalars['Int'];
  /** 何らかの事前申し込みもしくはプラン変更申請中にcharge_idが入る */
  refresh_charge_id?: Maybe<Scalars['Int']>;
  /** 契約開始日 */
  start_date: Scalars['Date'];
  student_id: Scalars['Int'];
  subscription_name?: Maybe<Scalars['String']>;
};

export type StudentProductInfo = {
  __typename?: 'StudentProductInfo';
  charge_id: Scalars['ID'];
  contract_type?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['String']>;
  order_no?: Maybe<Scalars['String']>;
  paid_at: Scalars['String'];
  plan_id?: Maybe<Scalars['ID']>;
  product_id: Scalars['ID'];
  start_date?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  student_id: Scalars['ID'];
  student_product_id: Scalars['ID'];
};

/** 受講生プロフィール */
export type StudentProfile = {
  __typename?: 'StudentProfile';
  /** 生年月日 */
  birthday?: Maybe<Scalars['Date']>;
  /** 法人名 */
  company_name?: Maybe<Scalars['String']>;
  /** 部署名 */
  department?: Maybe<Scalars['String']>;
  email_setting?: Maybe<StudentEmailSetting>;
  facebook_info?: Maybe<FacebookInfo>;
  /** 性別 */
  gender?: Maybe<StudentGender>;
  /** 業種 */
  industry_id?: Maybe<StudentIndustry>;
  /** 役職 */
  job_title?: Maybe<Scalars['String']>;
  other_setting?: Maybe<StudentOtherSetting>;
  student_id: Scalars['Int'];
  substitute_setting?: Maybe<SubstituteTrainersSetting>;
};

/**
 * 支払い方法別のサブスクリプションプロダクトの契約群
 * 現時点では以下のプロダクトのチャージ
 * - Online Lesson
 * - Bizmates Program Video(All Video Packageを含む)
 * - Bizmates Coaching
 */
export type SubscriptionCharges = {
  /** 銀行振込の契約 */
  bank_charges?: Maybe<Array<Maybe<Charge>>>;
  /** クレジットカード支払いの契約 */
  credit_charges?: Maybe<Array<Maybe<Charge>>>;
  /** PayPalRTまたはPayPalOLD支払いの契約 */
  paypal_charges?: Maybe<Array<Maybe<Charge>>>;
};

/** 代替トレーナー */
export type SubstituteTrainersSetting = {
  __typename?: 'SubstituteTrainersSetting';
  /** true->お気に入りトレーナーのみから手配 */
  like_trainer_only: Scalars['Boolean'];
  /** 0->不問/1->男性のみ/2->女性のみ */
  request_for_substitute_trainers: Scalars['Int'];
  /** true->代替トレーナーを充てる */
  substitute_trainers: Scalars['Boolean'];
};

export type Success = Message & {
  __typename?: 'Success';
  message: Scalars['String'];
};

/** トレーナー特徴情報 */
export type TeacherCharacteristic = {
  __typename?: 'TeacherCharacteristic';
  category_id: Scalars['Int'];
  name: Scalars['String'];
  name_en: Scalars['String'];
};

export type Text = {
  __typename?: 'Text';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type TextList = {
  __typename?: 'TextList';
  list: Array<Text>;
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  create_month: Scalars['Int'];
  end_datetime: Scalars['DateTime'];
  id: Scalars['ID'];
  /**
   * レッスンチケットか？
   * Is free ticket or bought ticket?
   */
  is_lesson_ticket: Scalars['Boolean'];
  start_datetime: Scalars['DateTime'];
  student_id: Scalars['Int'];
  student_product_id?: Maybe<Scalars['Int']>;
  ticket_type: Scalars['Int'];
  /**
   * 表示チケット名
   * Ticket name for display
   */
  ticket_type_name: Scalars['String'];
};

export type TicketCountInfo = {
  __typename?: 'TicketCountInfo';
  /** 本日使用可能な未使用繰り越しチケット */
  available_carryover_ticket_count: Scalars['Int'];
  /** 本日使用可能な振替チケット数 */
  available_free_ticket_count: Scalars['Int'];
  /** 本日使用可能な未使用月回数チケット */
  available_monthly_ticket_count: Scalars['Int'];
  /** 本日使用可能な未使用通常チケット数 */
  available_normal_ticket_count: Scalars['Int'];
  /** レッスンタイプ：0=１回きり/1=毎日/2=月回数（product_type=1の時） */
  lesson_type: Scalars['Int'];
};

export type TimeTable = {
  __typename?: 'TimeTable';
  /** 代替トレーナを充てた場合に前トレーナーidが入る */
  before_teacher_id?: Maybe<Scalars['Int']>;
  /** 予約済みか？ */
  booked: Scalars['Boolean'];
  finished: Scalars['Boolean'];
  id?: Maybe<Scalars['ID']>;
  /** トレーナーが準備完了ボタンを押した? */
  im_ready?: Maybe<Scalars['Int']>;
  lesson_date: Scalars['Date'];
  lesson_datetime: Scalars['DateTime'];
  /** レッスン提供終了時刻 */
  lesson_provide_end_time: Scalars['LessonProvideTime'];
  /** レッスン提供開始時刻 */
  lesson_provide_start_time: Scalars['LessonProvideTime'];
  open_datetime?: Maybe<Scalars['DateTime']>;
  opened: Scalars['Boolean'];
  teacher_id: Scalars['Int'];
  time_table_id: Scalars['Int'];
};

export type Timeslot = {
  __typename?: 'Timeslot';
  consultant_id: Scalars['String'];
  consultant_nickname: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  open_date_time?: Maybe<Scalars['DateTime']>;
  session_date: Scalars['String'];
  session_date_time: Scalars['DateTime'];
  session_time_from: Scalars['String'];
  session_time_to: Scalars['String'];
  status: Scalars['Int'];
  time_table_id: Scalars['ID'];
  type: Scalars['Int'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type TimeslotCounter = {
  __typename?: 'TimeslotCounter';
  booked_slots?: Maybe<Scalars['Int']>;
  tentative?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type Timeslots = {
  __typename?: 'Timeslots';
  number_of_days: Scalars['Int'];
  session_start_date: Scalars['String'];
  timeslots_by_date?: Maybe<Array<Maybe<TimeslotsByDate>>>;
  total_free_slots: Scalars['Int'];
};

export type TimeslotsByDate = {
  __typename?: 'TimeslotsByDate';
  booked_slots?: Maybe<Scalars['Int']>;
  free_slots: Scalars['Int'];
  session_date: Scalars['String'];
  session_date_jp: Scalars['String'];
  tentative_reserve_slots?: Maybe<Scalars['Int']>;
  timeslots_by_datetime?: Maybe<Array<Maybe<TimeslotsByDateTime>>>;
};

export type TimeslotsByDateTime = {
  __typename?: 'TimeslotsByDateTime';
  session_date: Scalars['String'];
  session_date_time: Scalars['DateTime'];
  session_time: Scalars['String'];
  timeslots15?: Maybe<Array<Maybe<Timeslot>>>;
  timeslots15_count?: Maybe<TimeslotCounter>;
  timeslots30?: Maybe<Array<Maybe<Timeslot>>>;
  timeslots30_count?: Maybe<TimeslotCounter>;
};

export type TokenPayload = {
  __typename?: 'TokenPayload';
  consultant_id: Scalars['Int'];
  email: Scalars['String'];
  emergency_contact?: Maybe<Scalars['String']>;
  expiration: Scalars['DateTime'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  type: Scalars['String'];
};

export type Trainer = {
  __typename?: 'Trainer';
  /** 経歴 */
  career?: Maybe<Array<Maybe<TrainerCareer>>>;
  /** 科目 */
  category?: Maybe<Array<Maybe<TrainerCategory>>>;
  /** トレーナー特徴 */
  characteristics?: Maybe<Array<Maybe<TeacherCharacteristic>>>;
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  /** 日本語の理解。会話が出来る/挨拶が出来る/単語がわかる/全く使えない */
  japanese: Scalars['String'];
  last_name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  nickname_kana?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  /** 自己紹介 */
  self_introduction?: Maybe<Scalars['String']>;
  self_introduction_jp?: Maybe<Scalars['String']>;
  self_introduction_mp3?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
  skype_name?: Maybe<Scalars['String']>;
  skype_sub_name?: Maybe<Scalars['String']>;
  start_teaching_date?: Maybe<Scalars['Date']>;
  teacher_id: Scalars['ID'];
};

export type TrainerCareer = {
  __typename?: 'TrainerCareer';
  en_name: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TrainerCategory = {
  __typename?: 'TrainerCategory';
  en_name: Scalars['String'];
  id: Scalars['ID'];
  is_display: Scalars['Int'];
  name: Scalars['String'];
};

export type TrainerEvaluateText = {
  __typename?: 'TrainerEvaluateText';
  list?: Maybe<Array<Maybe<TextList>>>;
};

export type TrainerFeedbackNotification = {
  __typename?: 'TrainerFeedbackNotification';
  evaluation_datetime?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

/** 受講生からみたトレーナー情報 */
export type TrainerInfoByStudent = {
  __typename?: 'TrainerInfoByStudent';
  /** お気に入りに入っているか？ */
  bookmark: Scalars['Boolean'];
  /**
   * このトレーナーを予約画面に表示しないか？
   * トレーナープロフィールではレッスンを受けたことがある場合に「このトレーナーを予約画面に表示しない」のボタンを表示する
   */
  disliked: Scalars['Boolean'];
  /** 直近の受講日 */
  last_lesson_date?: Maybe<Scalars['Date']>;
  /**
   * 直近の受講レッスン提供時間
   * e.g.) `2021年11月19日（金） 15:00～15:25`
   */
  last_lesson_provided_datetime?: Maybe<Scalars['String']>;
  /** このトレーナーの受講回数 */
  lesson_count: Scalars['Int'];
  /** トレーナーへのメモ */
  memo?: Maybe<Scalars['String']>;
  /** トレーナー情報 */
  trainer: Trainer;
  /**
   * トレーナー評価
   * 受講生がこのトレーナーで受講したレッスンの平均評価
   * ※整数値は小数点が無いのでフロント側で桁数を揃える必要あり e.g.) 5→5.0
   */
  vote_average: Scalars['Float'];
};

/** A paginated list of Trainer items. */
export type TrainerPaginator = {
  __typename?: 'TrainerPaginator';
  /** A list of Trainer items. */
  data: Array<Trainer>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TrainerSchedule = {
  __typename?: 'TrainerSchedule';
  /**
   * 休講日か？
   * trueの場合はその日付のスロット表示無しになる(is_holidayがtrueでも日付は赤文字とならないので注意)
   */
  is_closed_day: Scalars['Boolean'];
  /**
   * 土日または祝日か?
   * trueの場合は日付が赤文字になる
   */
  is_holiday: Scalars['Boolean'];
  lesson_date?: Maybe<Scalars['Date']>;
  time_table: Array<Maybe<TimeTable>>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type UpdateAdminPasswordInput = {
  password: Scalars['String'];
};

export type UpdateConsultantInput = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  nickname_kana?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  second_step?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type UpdateLessonRequestInput = {
  id: Scalars['Int'];
};

export type UpdateStudentInput = {
  nickname?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** おすすめのトレーナー検索条件 */
export type UpdateStudentRecommendedTrainerSettingInput = {
  /** 女性？ */
  select_female: Scalars['Boolean'];
  /** 男性？ */
  select_male: Scalars['Boolean'];
  /** 予約可能時間帯from / e.g. 05:00 */
  setting_time_from?: InputMaybe<Scalars['LessonTime']>;
  /** 予約可能時間帯to / e.g. 24:30 */
  setting_time_to?: InputMaybe<Scalars['LessonTime']>;
};

export type UpdateTimeSlot = {
  consultant_id?: InputMaybe<Scalars['Int']>;
  session_date?: InputMaybe<Scalars['String']>;
  session_date_time?: InputMaybe<Scalars['String']>;
  session_time_from?: InputMaybe<Scalars['String']>;
  session_time_to?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
};

export type UpdateTrainerRequestInput = {
  id: Scalars['Int'];
};

export type ValidateTokenPayload = Error | TokenPayload;

export type Vote = {
  __typename?: 'Vote';
  teacher_id: Scalars['Int'];
};

export type VoteByStudent = {
  id: Scalars['Int'];
  score: Scalars['Int'];
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<WhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<WhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type _Entity = Admin | AdminToken | ConsultantToken | Timeslot;

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type AdminResetPasswordByTokenInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type ComputeNewStartDateInput = {
  add?: InputMaybe<Scalars['Boolean']>;
  current_start_date: Scalars['String'];
  number_of_days?: InputMaybe<Scalars['Int']>;
};

export type ConsultantResetPasswordByTokenInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type ConsultantTimeslotInput = {
  consultant_id?: InputMaybe<Scalars['String']>;
  consultant_id_or_nickname?: InputMaybe<Scalars['String']>;
  consultant_nickname?: InputMaybe<Scalars['String']>;
  number_of_days?: InputMaybe<Scalars['Int']>;
  session_start_date?: InputMaybe<Scalars['String']>;
  session_time_from?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
};

export type FilterTimeslotInput = {
  consultant_id?: InputMaybe<Scalars['String']>;
  consultant_id_or_nickname?: InputMaybe<Scalars['String']>;
  consultant_nickname?: InputMaybe<Scalars['String']>;
  include_booked?: InputMaybe<Scalars['Boolean']>;
  number_of_days?: InputMaybe<Scalars['Int']>;
  session_start_date?: InputMaybe<Scalars['String']>;
  session_time_from?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
};

export type CheckPasswordMutationVariables = Exact<{
  admin_id: Scalars['ID'];
  password: Scalars['String'];
}>;


export type CheckPasswordMutation = { __typename?: 'Mutation', checkPassword?: { __typename: 'Error', message: string, status_type?: number | null } | { __typename: 'Success', message: string } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename: 'Error', message: string, status_type?: number | null } | { __typename: 'LoginPayload', access_token: string, type: string, expires_in: number } };

export type Unnamed_1_MutationVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Mutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'LoginPayload', access_token: string } };

export type ResetPasswordByTokenMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ResetPasswordByTokenMutation = { __typename?: 'Mutation', adminResetPasswordByToken: { __typename: 'Error', message: string, status_type?: number | null } | { __typename: 'Success', message: string } };

export type UpdateAdminPasswordMutationVariables = Exact<{
  admin_id: Scalars['ID'];
  password: Scalars['String'];
}>;


export type UpdateAdminPasswordMutation = { __typename?: 'Mutation', updateAdminPassword?: { __typename: 'Error', message: string, status_type?: number | null } | { __typename: 'Success', message: string } | null };
