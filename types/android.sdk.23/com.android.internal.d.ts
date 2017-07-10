/// <reference path="./java.lang.Object.d.ts" />
declare module com {
    export module android {
        export module internal {
            export module util {
                export class Predicate extends javalangObject {
                    /**
                     * Constructs a new instance of the com.android.internal.util.Predicate interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        apply(param0: javalangObject): boolean;
                    });

                    public apply(param0: javalangObject): boolean;
                }
            }
        }
    }
}
