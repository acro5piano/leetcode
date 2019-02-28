(ns leetcode.get-combination-sumup-once)

(defn two-sum [target inputs]
    (def memo {})
    (defn put-and-false [key value]
        (def memo (assoc memo key value))
        false)

    (defn filter-func [input]
        (def the-key (keyword (str input)))
        (when-not (the-key memo) (def memo (assoc memo the-key input)))
        (the-key memo))
    (def value (first (filter filter-func inputs)))
    [value (- target value)])

(println (two-sum 9 [12, 2, 7, 11, 15]))
(println (two-sum 10 [1, 5, 8, 9]))
(println (two-sum 25 [16, 5, 4, 9]))
(println (two-sum 6 [16, 5, 4, 9]))

;; export type Answer = number[] | false
;;
;; function getCombinationSumUpNoTwice(target: number, inputs: number[]): Answer {
;;   const memo = new Set<number>()
;;
;;   const value = inputs.find(value => {
;;     if (memo.has(target - value)) {
;;       return true
;;     }
;;     memo.add(value)
;;     return false
;;   })
;;   return value ? [value, target - value] : false
;; }
;;
;; console.log(getCombinationSumUpNoTwice(10, [1, 5, 8, 9])) // => [1, 9]
;; console.log(getCombinationSumUpNoTwice(25, [16, 5, 4, 9])) // => [16, 9]
;; console.log(getCombinationSumUpNoTwice(6, [16, 5, 4, 9])) // => false
