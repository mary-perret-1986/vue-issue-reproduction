import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";

const counterModule = namespace("counter");

@Options({
  name: "Counter"
})
export default class Counter extends Vue {
  @Prop({ type: String })
  private msg!: string;

  @counterModule.State("_count")
  private counter!: number;

  @counterModule.Getter("count")
  private getCounter!: () => number;

  @counterModule.Action
  private add!: () => Promise<void>;

  @counterModule.Action
  private subtract!: () => Promise<void>;
}
